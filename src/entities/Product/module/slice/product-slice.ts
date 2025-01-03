import { createSlice } from '@reduxjs/toolkit';
import { ProductState } from '../types/types';
import { fetchProductData } from '../..//service/fetch-data';

const initialState: ProductState = {
  data: undefined,
  isLoading: undefined,
  error: undefined,
};


export const productSlice = createSlice({
  name: '@@product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProductData.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchProductData.rejected, (state, action) => {
      state.isLoading = undefined;
      state.error = action.payload;
    });
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;
      state.data = action.payload;
    });
  },
});

export const { reducer: productReducer } = productSlice;
export const { actions: productActions } = productSlice;