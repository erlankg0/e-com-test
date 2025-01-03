import { Product, ProductView } from '../../../module/types/types';

export type ProductItemProps = {
  product: Product
  className?: string;
  view?: ProductView;
}