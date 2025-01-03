import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosResponse } from 'axios';

import { Product } from '../module/types/types';
import type { ThunkConfig } from '@/app/store';

// Асинхронное действие
export const fetchProductData = createAsyncThunk<
  Product[],                     // Тип данных, возвращаемых при успешной операции
  void,                         // Тип данных, передаваемых в действие
  ThunkConfig<string>          // Дополнительные параметры
>(
  'product/fetchProductData',
  async (_, { extra, rejectWithValue }) => {
    try {
      // Отправляем запрос на сервер
      const response: AxiosResponse<Product[]> = await extra.api.get(`/products`);

      // Если данные отсутствуют, возвращаем ошибку
      if (!response.data) {
        return rejectWithValue('Ошибка при загрузке данных');
      }
      return response.data; // Возвращаем данные пользователя
    } catch {

      return rejectWithValue('Ошибка сети'); // Возвращаем ошибку
    }
  },
);