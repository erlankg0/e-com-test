export interface AdWidgetProps {
  ads: {
    image: string; // URL изображения рекламы
    link: string;  // Ссылка на рекламируемый продукт
    alt: string;   // Альтернативный текст
  }[];
}
