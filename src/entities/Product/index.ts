// module
export { productActions, productReducer } from './module/slice/product-slice';
export {
  getProductIsError,
  getProductIsLoading,
  getProductsData,
  getProductSort,
  getProductSearch,
} from './module/selectors/product-seletors';
export type { Product, ProductState, ProductView } from './module/types/types';
export { ProductSortField } from './module/types/types';

// ui
export { ProductItem } from './ui/product-item';
export { ProductList } from './ui/product-list';

// service
export { fetchProductData } from './service/fetch-data';
