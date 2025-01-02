import {FC} from 'react';

import {UiIconProps} from "../model/types"; // Типы и интерфейсы
import {classNames} from "@/shared/lib/classnames"; // Стили компонента

export const UiIcon: FC<UiIconProps> = (props) => {
    const {SVG, className, ...sizes} = props;
    return <SVG {...sizes} className={classNames(`w-full`, {}, [className])}/>
};