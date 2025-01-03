import { ProductState } from '@/entities/Product/module/types/types';
import { AnyAction, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { AxiosInstance } from 'axios';

export interface StoreSchema {
  products: ProductState;
}

export interface IStoreProvider {
  children: ReactNode,
  initialState?: Partial<StoreSchema>,
  asyncState?: Partial<StoreSchema>,
}

// Тип для ключей состояния StoreSchema
export type StoreSchemaKeys = keyof StoreSchema;

// Тип для менеджера редьюсеров, который принимает конкретные редьюсеры для каждого ключа StoreSchema
export interface ReducerManager<S extends Record<string, any>> {
  // Получение карты редьюсеров
  getReducerMap: () => ReducersMapObject<S>;

  // Основной редьюсер, который комбинирует все редьюсеры
  reduce: (state: S | undefined, action: AnyAction) => S;

  // Метод для добавления нового редьюсера
  add: <K extends StoreSchemaKeys>(
    key: K,
    reducer: Reducer<S[K], AnyAction>,
  ) => void;

  // Метод для удаления редьюсера
  remove: (key: StoreSchemaKeys) => void;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}


export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StoreSchema;
}