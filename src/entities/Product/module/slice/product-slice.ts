import { createSlice } from '@reduxjs/toolkit';
import { ProductState } from '@/entities/Product/module/types/types';

const initialState: ProductState = {
  data: undefined,
  isLoading: undefined,
  error: undefined,
};


export const productSlice = createSlice({
  name: '@@product',
  initialState,
  reducers: {},
});

export const { reducer: productReducer } = productSlice;
export const { actions: productActions } = productSlice;