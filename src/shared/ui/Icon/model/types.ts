import {ComponentType, SVGProps} from "react";

export interface UiIconProps {
    SVG: ComponentType<SVGProps<SVGSVGElement>>;  // Используем ComponentType для поддержки и классовых, и функциональных компонентов
    className?: string;
    width?: number | string;
    height?: number | string;
}