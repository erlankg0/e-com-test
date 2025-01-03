import { Skeleton } from '@/shared/ui/Skeleton';
import { UiCard } from '@/shared/ui/Card/ui/card';
import { classNames } from '@/shared/lib/classnames';

import cls from './product-item.module.scss';

export const ProductItemSkeleton = () => {


  const Images = (
    <div className={classNames(cls.imageWrapper)}>
      <Skeleton
        width={330}
        height={400}
        className={classNames(cls.image, {}, [cls.firstImage])} // Add firstImage class
      />
      <div className={cls.buttonInfo}>
        <Skeleton width={100} height={30} className={cls.buy} />
      </div>
    </div>
  );

  return (
    <UiCard className={classNames(cls.card, {}, [])}>
      <header>
        {Images}
      </header>
      <footer>
        <Skeleton width={150} height={30} />
        <Skeleton width={150} height={30} />
        <Skeleton width={150} height={30} />
      </footer>
    </UiCard>
  );
};
