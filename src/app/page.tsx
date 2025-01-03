'use client';
import { ProductItem } from '@/entities/Product';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { fetchProductData } from '@/entities/Product/service/fetch-data';
import {
  getProductIsError,
  getProductIsLoading,
  getProductsData,
} from '@/entities/Product/module/selectors/product-seletors';
import { Product } from '@/entities/Product/module/types/types';


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

  if (products != undefined) {
    return (
      <main>
        {products.map((product: Product) => (<ProductItem product={product} />))}
      </main>
    );
  }

  return <div>No products available</div>;

}
