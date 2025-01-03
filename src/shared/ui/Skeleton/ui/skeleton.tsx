import cls from './skeleton.module.scss';
import { ISkeletonProps } from '../model/types';
import { CSSProperties, FC } from 'react';
import { classNames } from '@/shared/lib/classnames';

export const Skeleton: FC<ISkeletonProps> = (props) => {
  const {
    color = 'transparent',
    height,
    width,
    className,
    borderRadius,
  } = props;
  const styles: CSSProperties = {
    width,
    height,
    borderRadius,
    color,
  };
  return (
    <div className={classNames(cls.uiSkeleton, {}, [className])} style={styles} />
  );
};