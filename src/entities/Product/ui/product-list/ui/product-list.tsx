import { FC } from 'react';
import type { Product, ProductView } from '@/entities/Product';
import { ProductItem, ProductItemSkeleton } from '../../product-item';
import { IProductListProps } from '../model/types';
import cls from './product.module.scss';
import { classNames, Mods } from '@/shared/lib/classnames';

const getSkeletons = (view: ProductView) => new Array(view === 'small' ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    <ProductItemSkeleton key={index} />
  ));

export const ProductList: FC<IProductListProps> = (props) => {
  const {
    products,
    isLoading,
    view = 'medium',
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
    return <ProductItem product={product} view={view} />;
  };

  const mods: Mods = {
    [cls[view]]: !!view,
  };

  return (
    <section className={classNames(cls.list, mods)}>
      {products.length > 0 && (
        products.map((product) => renderProduct(product))
      )}
      {isLoading && getSkeletons(view)}
    </section>
  );
};