import { useCallback, useMemo, useState } from "react";

// Определяем типы для объекта, возвращаемого хуклом.
interface UserHoveBind {
    // Эта функция вызывается, когда мышь входит в элемент.
    onMouseEnter(): void;

    // Эта функция вызывается, когда мышь покидает элемент.
    onMouseLeave(): void;
}

// Определяем тип возвращаемого значения хука useHover, который является кортежем.
// Первый элемент - это булевое значение, указывающее, наведена ли мышь на элемент.
// Второй элемент - объект с обработчиками событий onMouseEnter и onMouseLeave.
type UseHoverResult = [boolean, UserHoveBind]

// `useHover` — это кастомный хук, который отслеживает, находится ли мышь на элементе.
export const useHover = (): UseHoverResult => {
    // Состояние `isHover` отслеживает, находится ли мышь над элементом.
    const [isHover, setIsHover] = useState<boolean>(false);

    // `onMouseEnter` — это мемоизированная функция, которая устанавливает состояние `isHover` в true,
    // когда мышь входит в элемент.
    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);

    // `onMouseLeave` — это мемоизированная функция, которая устанавливает состояние `isHover` в false,
    // когда мышь покидает элемент.
    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    // Хук возвращает мемоизированный кортеж.
    // Первый элемент — это состояние `isHover` (булево значение), указывающее, наведена ли мышь на элемент.
    // Второй элемент — объект, содержащий обработчики событий `onMouseEnter` и `onMouseLeave`.
    return useMemo<UseHoverResult>(() => [isHover, { onMouseEnter, onMouseLeave }], [isHover, onMouseEnter, onMouseLeave]);
};
