import { ProductItem } from '@/entities/Product';

const products = {
  id: '1',
  title: 'Cropped Faux Leather Jacket',
  category: 'Jackets',
  description: 'A stylish faux leather jacket, perfect for all seasons.',
  price: 99.99,
  images: [
    '/photo/product-1-1.webp',
    '/photo/product-1-2.webp',
  ],
  isNew: true,
};

export default function Home() {
  return (
    <main>
      <ProductItem product={products} />
    </main>
  );
}
