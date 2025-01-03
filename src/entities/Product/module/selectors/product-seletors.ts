import { StoreSchema } from '@/app/store';
import { ProductSortField } from '@/entities/Product';

export const getProductsData = (state: StoreSchema) => state.products?.data;
export const getProductIsLoading = (state: StoreSchema) => !!state.products.isLoading;
export const getProductIsError = (state: StoreSchema) => state.products.error;
export const getProductSort = (state: StoreSchema) => state.products.sort || ProductSortField.MAXPRICE;
export const getProductSearch = (state: StoreSchema) => state.products.search || '';