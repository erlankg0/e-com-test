import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StoreSchema } from '@/app/store/types/types';
import { productReducer } from '@/entities/Product';
import { createReducerManager } from '@/app/store/config/reducer-manager';

export const createReduxStore = (initialState?: StoreSchema, asyncReducers?: Partial<ReducersMapObject<StoreSchema>>) => {
  const rootReducer: ReducersMapObject<StoreSchema> = {
    ...asyncReducers,
    products: productReducer,
  };

  // Create the reducer manager with the root reducers
  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });

  // Add the reducer manager to the store
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager;
  return store;
};

// Types for RootState and AppDispatch
export type RootState = ReturnType<ReturnType<typeof createReduxStore>['getState']>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];