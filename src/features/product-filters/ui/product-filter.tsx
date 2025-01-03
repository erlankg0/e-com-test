import { UiSelect } from '@/shared/ui/Select';
import { useCallback, useMemo } from 'react';
import { SelectOption } from '@/shared/ui/Select/model/types';
import { fetchProductData, getProductSort, productActions, ProductSortField } from '@/entities/Product';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useAppDispatch, useAppSelector } from '@/app/store';

export const ProductFilters = () => {

  const sortFieldOptions = useMemo<SelectOption<ProductSortField>[]>(() => [
    { value: ProductSortField.ISNEW, content: 'новые' },
    { value: ProductSortField.TITLE, content: 'по названию' },
    { value: ProductSortField.MAXPRICE, content: 'Дорогие' },
    { value: ProductSortField.MAXPRICE, content: 'Дешёвые' },
  ], []);

  const sort = useAppSelector(getProductSort);


  const dispatch = useAppDispatch();

  const handleFetchData = useCallback(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  const fetchDebounceData = useDebounce(handleFetchData, 500);


  const handleOnChangerSort = useCallback((sort: ProductSortField) => {
    dispatch(productActions.setSort(sort));
    handleFetchData();
  }, [dispatch, handleFetchData]);


  return (

    <section>
      <UiSelect
        options={sortFieldOptions}
        label={'Сортировка'}
        value={sort}
        onChange={handleOnChangerSort}
      />

    </section>
  );
};