import { Reducer, AnyAction, combineReducers, ReducersMapObject } from '@reduxjs/toolkit';
import { ReducerManager, StoreSchemaKeys } from '@/app/store/types/types';

// Улучшенная типизация
export function createReducerManager<S extends Record<StoreSchemaKeys, Reducer<any, AnyAction>>>(
  initialReducers: S,
): ReducerManager<S> {
  const reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);
  let keysToRemove: StoreSchemaKeys[] = [];  // Исправили тип на строковый массив


  return {
    // @ts-ignore
    getReducerMap: () => reducers,

    reduce: (state: S | undefined, action: AnyAction): S => {
      if (keysToRemove.length > 0) {
        // @ts-ignore
        state = { ...state };
        if (state) {
          keysToRemove.forEach((key) => {
            // Удаляем ключ из состояния, только если он существует
            // @ts-ignore
            delete state[key];
          });
        }
        keysToRemove = [];
      }

      // @ts-ignore
      return combinedReducer(state, action);
    },

    add: <K extends StoreSchemaKeys, R extends Reducer<S[K], AnyAction>>(
      key: K,
      reducer: R,
    ) => {
      // Добавление нового редьюсера
      if (reducers[key]) return;  // Если редьюсер уже есть, не добавляем

      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },

    remove: (key: StoreSchemaKeys) => {
      // Удаление редьюсера
      if (!reducers[key]) return;  // Если редьюсер не существует, ничего не делаем

      // @ts-ignore
      delete reducers[key];
      keysToRemove.push(key);  // Добавляем ключ в очередь на удаление
      combinedReducer = combineReducers(reducers);  // Пересобираем редьюсеры
    },
  };
}
// есть проблема с типизацией данных