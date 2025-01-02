export type Product = {
  id: string;
  title: string;
  category: string;
  description?: string;
  price: number;
  images: string[];
  isNew: boolean;
}