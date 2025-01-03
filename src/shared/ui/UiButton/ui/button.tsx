// React и стандартные модули
import { FC } from 'react';

// Внутренние зависимости и типы
import { IButtonProps } from '../model/types';

// Общие утилиты
import { classNames, Mods } from '@/shared/lib/classnames';

// Стили
import cls from './button.module.scss';


export const UiButton: FC<IButtonProps> = (props) => {
  const {
    className,
    children,
    disabled = false,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.disabled]: disabled,
  };
  return (
    <button
      className={classNames(cls.button, mods, [className])}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={!disabled ? otherProps.onClick : undefined}
    >
      {children}
    </button>
  );
};