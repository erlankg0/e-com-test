import { FC } from 'react';

import { classNames, Mods } from '@/shared/lib/classnames';
import { ICardProps } from '../model/types';
import cls from './card.module.scss';


export const UiCard: FC<ICardProps> = (props) => {
  const { children, className, ...otherProps } = props;

  const mods: Mods = {};

  return (
    <article {...otherProps} className={classNames(cls.card, mods, [className])}>
      {children}
    </article>
  );
};