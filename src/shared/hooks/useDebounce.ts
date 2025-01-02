import { useCallback, useRef } from "react";

// Кастомный хук `useDebounce` для дебаунса функции.
// Он возвращает обёрнутую функцию, которая будет вызывать исходную функцию
// не чаще, чем через указанную задержку (delay).
export function useDebounce<T extends (...args: never[]) => void>(callback: T, delay: number = 1000) {
    // Инициализация ref для хранения идентификатора таймера (с типом, возвращаемым setTimeout)
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Возвращаем обёрнутую функцию с дебаунсом
    return useCallback((...args: Parameters<T>) => {
        // Если таймер уже существует, очищаем его
        if (timer.current) {
            clearTimeout(timer.current);
        }

        // Устанавливаем новый таймер, который вызовет исходную функцию через заданную задержку
        timer.current = setTimeout(() => callback(...args), delay);
    }, [callback, delay]); // Хук будет обновляться, если изменятся `callback` или `delay`
}
