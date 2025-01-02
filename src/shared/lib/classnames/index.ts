export type Mods = Record<string, boolean | undefined>;

export const classNames = (cls: string, mods: Mods = {}, additional: Array<string | undefined> = []): string => {
    const activeMods = Object.keys(mods).filter(key => mods[key]); // Только трушные моды
    return [cls, ...additional, ...activeMods].join(' ');
};