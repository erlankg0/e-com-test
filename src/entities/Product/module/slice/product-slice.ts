import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductSortField, ProductState, ProductView } from '../types/types';
import { fetchProductData } from '../../service/fetch-data';
import { persistStorage } from '@/shared/lib/persis-storage';
import { VIEW_LOCAL_STORAGE } from '@/shared/constants/storage';

const initialState: ProductState = {
  data: undefined,
  isLoading: undefined,
  error: undefined,
  sort: ProductSortField.MAXPRICE,
};


export const productSlice = createSlice({
  name: '@@product',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ProductView>) => {
      state.view = action.payload;
      persistStorage.setItemSafe(VIEW_LOCAL_STORAGE, action.payload);
    },

    setSort: (state, action: PayloadAction<ProductSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
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