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
    [cls[align]]: !!align,
    [cls[size]]: true,
  };

  return (
    <div className={classNames(cls.text, mods, [className, size])}>
      {title && (<p className={classNames(cls.title, mods)}>{title}</p>)}
      {text && (<p className={classNames(cls.text, mods)}>{text}</p>)}
    </div>
  );
};
