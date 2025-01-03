"use client"
import { FC } from 'react';
import { IStoreProvider, StoreSchema } from '@/app/store/types/types';
import { createReduxStore } from '@/app/store/config/store';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';

export const StoreProvider: FC<IStoreProvider> = ({ children, initialState, asyncState }) => {
  const store = createReduxStore(initialState as StoreSchema, asyncState as ReducersMapObject<StoreSchema>);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};