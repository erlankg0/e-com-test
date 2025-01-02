import {useCallback, useRef} from "react";

/**
 * Хук useThrottle предотвращает частые вызовы функции,
 * обеспечивая вызов функции не чаще, чем раз в заданный интервал времени (delay).
 *
 * @param callback - Функция, которую нужно вызывать с throttle.
 * @param delay - Задержка в миллисекундах между вызовами.
 */
export function useThrottle<T extends (...args: never[]) => void>(callback: T, delay: number = 1000) {
    // Сохраняем состояние, блокируемое на время delay
    const throttleRef = useRef(false);

    // Возвращаем обёрнутую функцию с throttle
    return useCallback((...args: Parameters<T>) => {
        // Проверяем, доступен ли вызов функции
        if (!throttleRef.current) {
            // Вызываем оригинальную функцию с переданными аргументами
            callback(...args);

            // Устанавливаем блокировку на выполнение функции
            throttleRef.current = true;

            // Через delay снимаем блокировку
            setTimeout(() => {
                throttleRef.current = false;
            }, delay);
        }
    }, [callback, delay]); // Хук обновится, если изменится callback или delay
}