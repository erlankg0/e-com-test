export const persistStorage = {
    getItemSafe: <T>(key: string, defaultValue: T): T => {
        try {
            const item = localStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : defaultValue;
        } catch {
            return defaultValue;
        }
    },

    setItemSafe: <T>(key: string, value: T): void => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch {
            // Ничего не делаем, если произошла ошибка
        }
    },

    getItem: <T>(key: string): T | null => {
        try {
            const item = localStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : null;
        } catch {
            return null;
        }
    },
    removeItem: (key: string): void => {
        localStorage.removeItem(key);
    }
};