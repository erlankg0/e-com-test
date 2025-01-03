import { ChangeEvent, useMemo } from 'react';
import { IUISelect } from '../model/types';
import cls from './select.module.scss';
import { classNames, Mods } from '@/shared/lib/classnames';

export const UiSelect = <T extends string>(props: IUISelect<T>) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly,
  } = props;


  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  const optionList = useMemo(() => {
    return options?.map((optionItem) => (<option className={classNames(cls.option)} key={optionItem.value}
                                                 value={optionItem.value}>{optionItem.content}</option>));
  }, [options]);

  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value as T);
    }
  };


  return (
    <div className={classNames(cls.wrapper, mods, [className])}>
      {label && (<span className={classNames(cls.label)}>{String(label + ' >')}</span>)}
      <select
        className={classNames(cls.select)}
        value={value}
        onChange={handleOnChange}
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>
  );
};