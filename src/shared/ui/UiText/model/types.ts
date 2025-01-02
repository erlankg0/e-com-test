type align = "left" | "right" | "center";
type size = "small" | "medium" | "large";

export interface IUiTextProps {
  className?: string;
  title?: string;
  text?: string;
  align?: align;
  size?: size;
}