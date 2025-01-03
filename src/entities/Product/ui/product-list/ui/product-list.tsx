import { FC } from 'react';
import { IProductListProps } from '../model/types';
import { Product, ProductView } from '@/entities/Product/module/types/types';
import { ProductItem } from '../../product-item';
import { ProductItemSkeleton } from '../../product-item';

const getSkeletons = (view: ProductView) => new Array(view === 'small' ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    <ProductItemSkeleton key={index} />
  ));

export const ProductList: FC<IProductListProps> = (props) => {
  const {
    products,
    isLoading,
    view = 'small',
  } = props;

  if (isLoading) {
    const skeletons = new Array(view == 'small' ? 9 : 3).fill(0).map((_, index) => (
      <ProductItemSkeleton key={index} />
    ));

    return (
      <section>
        {skeletons}
      </section>
    );
  }

  const renderProduct = (product: Product) => {
    return <ProductItem product={product} />;
  };
  return (
    <section>
      {products.length > 0 && (
        products.map((product) => renderProduct(product))
      )}
      {isLoading && getSkeletons(view)}
    </section>
  );
};