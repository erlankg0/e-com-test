export { productActions, productReducer } from './module/slice/product-slice';

export { ProductItem } from './ui/product-item';
export { ProductList } from './ui/product-list';
export { fetchProductData } from './service/fetch-data';
export { getProductIsError, getProductIsLoading, getProductsData } from './module/selectors/product-seletors';
export type { Product, ProductState, ProductView } from './module/types/types';