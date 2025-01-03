import { FC } from 'react';

// Сторонние модули и утилиты
import { classNames, Mods } from '@/shared/lib/classnames';

// Локальные типы и интерфейсы
import { IUiTextProps } from '../model/types';

// Стили компонента
import cls from './text.module.scss';


export const UiText: FC<IUiTextProps> = (props) => {
  const {
    className,
    text,
    title,
    align = 'left',
    size = 'small',
  } = props;

  const mods: Mods = {
    [cls[align]]: true, // Пример: cls.left, cls.right
    [cls[size]]: true,  // Пример: cls.small, cls.medium, cls.large
  };



  return (
    <article className={classNames(cls.textContainer, mods, [className])}>
      {title && <h2 className={classNames(cls.title)}>{title}</h2>}
      {text && <p className={classNames(cls.text)}>{text}</p>}
    </article>
  );

};
