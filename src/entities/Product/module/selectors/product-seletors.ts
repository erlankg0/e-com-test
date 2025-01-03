import { StoreSchema } from '@/app/store';

export const getProductsData = (state: StoreSchema) => state.products?.data;
export const getProductIsLoading = (state: StoreSchema) => !!state.products.isLoading;
export const getProductIsError = (state: StoreSchema) => state.products.error;