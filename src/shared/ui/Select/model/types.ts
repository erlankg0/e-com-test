export type SelectOption<T extends string> = {
  value: T;
  content: string;
}

export interface IUISelect<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[],
  value?: T,
  onChange?: (value: T) => void,
  readonly?: boolean,
}
