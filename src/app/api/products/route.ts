import { Product } from '@/entities/Product/module/types/types';
import { NextRequest, NextResponse } from 'next/server';

const products: Product[] = [
  {
    id: '1',
    title: 'Wireless Mouse',
    category: 'Electronics',
    description: 'Ergonomic wireless mouse with customizable buttons.',
    price: 25.99,
    images: ['mouse1.jpg', 'mouse2.jpg'],
    isNew: true,
  },
  {
    id: '2',
    title: 'Smartphone Case',
    category: 'Accessories',
    description: 'Durable case for iPhone 13 with a sleek design.',
    price: 15.49,
    images: ['case1.jpg', 'case2.jpg'],
    isNew: false,
  },
  {
    id: '3',
    title: 'Gaming Keyboard',
    category: 'Electronics',
    description: 'Mechanical keyboard with RGB backlighting.',
    price: 79.99,
    images: ['keyboard1.jpg', 'keyboard2.jpg'],
    isNew: true,
  },
  {
    id: '4',
    title: 'Laptop Stand',
    category: 'Furniture',
    description: 'Adjustable laptop stand for ergonomic typing.',
    price: 34.99,
    images: ['stand1.jpg', 'stand2.jpg'],
    isNew: false,
  },
  {
    id: '5',
    title: 'Bluetooth Speaker',
    category: 'Electronics',
    description: 'Portable Bluetooth speaker with 10 hours of battery life.',
    price: 49.99,
    images: ['speaker1.jpg', 'speaker2.jpg'],
    isNew: true,
  },
  {
    id: '6',
    title: 'Office Chair',
    category: 'Furniture',
    description: 'Ergonomic office chair with lumbar support.',
    price: 149.99,
    images: ['chair1.jpg', 'chair2.jpg'],
    isNew: false,
  },
  {
    id: '7',
    title: 'Smart Watch',
    category: 'Electronics',
    description: 'Smart watch with fitness tracking and heart rate monitor.',
    price: 199.99,
    images: ['watch1.jpg', 'watch2.jpg'],
    isNew: true,
  },
  {
    id: '8',
    title: 'Coffee Maker',
    category: 'Appliances',
    description: 'Coffee maker with programmable timer and auto shut-off.',
    price: 89.99,
    images: ['coffee1.jpg', 'coffee2.jpg'],
    isNew: false,
  },
  {
    id: '9',
    title: 'T-shirt',
    category: 'Clothing',
    description: 'Cotton T-shirt with a minimalist design.',
    price: 19.99,
    images: ['tshirt1.jpg', 'tshirt2.jpg'],
    isNew: true,
  },
  {
    id: '10',
    title: 'Yoga Mat',
    category: 'Sports',
    description: 'Non-slip yoga mat with extra thickness for comfort.',
    price: 29.99,
    images: ['mat1.jpg', 'mat2.jpg'],
    isNew: false,
  },
];

export async function GET(request: NextRequest) {
  const url = new URL(request.url);

  const minPrice = url.searchParams.get('MINPRICE');
  const maxPrice = url.searchParams.get('MAXPRICE');
  const title = url.searchParams.get('TITLE');
  const isNew = url.searchParams.get('ISNEW');
  const sort = url.searchParams.get('sort');

  let filteredProducts = products;

  // Фильтрация по цене
  if (minPrice && !isNaN(Number(minPrice))) {
    filteredProducts = filteredProducts.filter((product) => product.price >= Number(minPrice));
  }

  if (maxPrice && !isNaN(Number(maxPrice))) {
    filteredProducts = filteredProducts.filter((product) => product.price <= Number(maxPrice));
  }

  // Фильтрация по названию (case-insensitive)
  if (title) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(title.toLowerCase()),
    );
  }

  // Фильтрация по новизне
  if (isNew) {
    const isNewBoolean = isNew === 'true'; // Преобразуем в булево значение
    filteredProducts = filteredProducts.filter((product) => product.isNew === isNewBoolean);
  }

  // Сортировка
  if (sort) {
    switch (sort) {
      case 'MAXPRICE':
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price); // Сортировка по убыванию цены
        break;
      case 'MINPRICE':
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price); // Сортировка по возрастанию цены
        break;
      case 'TITLE':
        filteredProducts = filteredProducts.sort((a, b) =>
          a.title.localeCompare(b.title), // Сортировка по названию (алфавитный порядок)
        );
        break;
      case 'ISNEW':
        filteredProducts = filteredProducts.sort((a, b) => {
          // Сортировка по новизне (сначала новинки)
          if (a.isNew === b.isNew) return 0;
          return a.isNew ? -1 : 1;
        });
        break;
      default:
        break;
    }
  }


  return NextResponse.json(filteredProducts);
}
