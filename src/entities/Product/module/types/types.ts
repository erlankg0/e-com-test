export type Product = {
  id: string;
  title: string;
  category: string;
  description?: string;
  price: number;
  images: string[];
  isNew: boolean;
}
export type ProductView = 'small' | 'medium' | 'large';

export interface ProductState {
  isLoading?: boolean;
  error?: string;
  data?: Product[];
  view?: ProductView;
  sort?: ProductSortField;
  search?: string;
}

export enum ProductSortField {
  ISNEW = 'ISNEW',
  TITLE = 'TITLE',
  MINPRICE = 'MINPRICE',
  MAXPRICE = 'MAXPRICE',
}

