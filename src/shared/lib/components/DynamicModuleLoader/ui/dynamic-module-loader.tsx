import { FC, useEffect } from 'react';
import { IDynamicModuleLoaderProps } from '../model/types';
import { useStore } from 'react-redux';
import { StoreSchema, StoreSchemaKeys, ReducerManager } from '@/app/store';
import { useAppDispatch } from '@/app/store';

export const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = (props) => {
  const {
    children,
    reducerKey,
    reducers,
    removeAfterUnMount = false,
  } = props;
  const store = useStore()
  const dispatch = useAppDispatch();

  // Добавили зависимость в useEffect
  // Теперь useEffect будет выполняться только при изменении store.reducerManager и dispatch
  useEffect(() => {
    // @ts-ignore

    const mountedReducer = store.reducerManager.getMountedReducers();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const mounted = mountedReducer[name as StoreSchemaKeys];
    if (!mounted) {
      Object.entries(reducers).forEach(([reducerName, reducer]) => {
        // @ts-ignore

        store.reducerManager.add(reducerName as keyof StoreSchema, reducer); // Добавляем продюсер
      });
      // Функция очистки, которая удаляет продюсер и dispatch при удалении компонента
      dispatch({ type: `@@ INIT ${reducerKey} DynamicModuleLoader` });

    }
    return () => {
      if (removeAfterUnMount) {
        Object.entries(reducers).forEach(([reducerName]) => {
          // @ts-ignore

          store.reducerManager.remove(reducerName as keyof StoreSchema); // Убираем продюсер
        });
        dispatch({ type: `@@ DESTROY ${reducerKey} DynamicModuleLoader` });
      }
    };
    // @ts-ignore
    
  }, [dispatch, reducerKey, store.reducerManager, removeAfterUnMount, reducers]);  // Теперь useEffect будет зависеть от этих значений

  return (
    <>
      {children}
    </>
  );

};