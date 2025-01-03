import { UiCard } from '@/shared/ui/Card/ui/card';
import type { ProductItemProps } from '../model/types';
import { FC } from 'react';
import Image from 'next/image';
import { UiText } from '@/shared/ui/UiText';
import { classNames } from '@/shared/lib/classnames';
import cls from './product-item.module.scss';
import photo from '../photos/product-1-2.webp';
import photo1 from '../photos/product-1-1.webp';

export const ProductItem: FC<ProductItemProps> = (props) => {
  const {
    product,
    className,
  } = props;

  const Images = product.images.length >= 2 && (
    <div className={classNames(cls.imageWrapper)}>
      {product.isNew && (<span className={cls.isNew}>NEW</span>)}
      <Image
        src={photo1}
        alt={`product image ${product.id}`}
        width={330}
        height={400}
        className={classNames(cls.image, {}, [cls.firstImage])} // Add firstImage class
      />
      <Image
        src={photo}
        alt={`product image ${product.id}`}
        width={330}
        height={400}
        className={classNames(cls.image, {}, [cls.secondImage])} // Add secondImage class
      />
      <div className={cls.buttonInfo}>
        <button className={cls.buyButton}>buy</button>
      </div>
    </div>
  );

  return (
    <UiCard className={classNames(cls.card, {}, [className])}>
      <header>
        {Images ? (
          Images
        ) : (
          <Image className={cls.image} src={product.images[0]} alt={'image product'} />
        )}
      </header>
      <footer>
        <UiText size={'small'} text={product.category} />
        <UiText size={'medium'} title={product.title} />
        <UiText size={'medium'} title={`$ ${product.price}`} />
      </footer>
    </UiCard>
  );
};
