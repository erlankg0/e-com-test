import { Product, ProductView } from '@/entities/Product/module/types/types';

export interface IProductListProps {
  className?: string;
  products: Product[];
  isLoading?: boolean;
  view?: ProductView;
}