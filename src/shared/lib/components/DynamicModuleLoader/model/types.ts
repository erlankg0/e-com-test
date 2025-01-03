import { ReactNode } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import type { StoreSchemaKeys } from '@/app/store';

// Тип для списка редьюсеров, где ключи — это значения из StoreSchemaKeys, а значения — редьюсеры.
export type ReducerList = {
  [name in StoreSchemaKeys]?: Reducer // Каждый редьюсер может быть добавлен для соответствующего ключа, и они все являются опциональными.
}

// Интерфейс для пропсов компонента динамической загрузки редьюсеров.
export interface IDynamicModuleLoaderProps {
  children: ReactNode, // Дочерние элементы компонента (что будет отображаться внутри).
  reducerKey: StoreSchemaKeys, // Ключ редьюсера в хранилище, который будет добавляться (например, 'user', 'auth').
  reducers: ReducerList, // Список редьюсеров, которые нужно добавить в хранилище.
  removeAfterUnMount?: boolean, // Опциональный флаг, указывающий, нужно ли удалять редьюсер после размонтирования компонента (по умолчанию — true).
}