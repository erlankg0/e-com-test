'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store';
import {
  fetchProductData,
  getProductIsError,
  getProductIsLoading,
  getProductsData,
  ProductList,
} from '@/entities/Product';

export default function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(getProductsData);
  const isLoading = useAppSelector(getProductIsLoading);
  const error = useAppSelector(getProductIsError);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  if (isLoading) {
    return <div>..Loading..</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!products?.length) {
    return <div>No products found.</div>;
  }

  return (
    <section>
      <ProductList products={products} isLoading={isLoading} />
    </section>
  );
}
