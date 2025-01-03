import { Reducer } from '@reduxjs/toolkit';

export type Product = {
  id: string;
  title: string;
  category: string;
  description?: string;
  price: number;
  images: string[];
  isNew: boolean;
}

export interface ProductState {
  isLoading?: boolean;
  error?: string;
  data?: Product[];
}

export type ProductView = 'small' | 'medium' | 'large';