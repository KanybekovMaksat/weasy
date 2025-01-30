import { PriceCardProps } from "./cardprice.ui";
    
export const PricingData: PriceCardProps[] = [
  {
    title: "Бесплатно",
    price: "0$",
    description: "Основные функции.Отлично подходит для личного использования.",
    buttonText: "Начать бесплатно",
    bgColor: "bg-btnback",
    textColor: "text-white",
    bgBtn: "bg-white",
  },
  {
    title: "Базовый",
    price: "5$",
    description:
      "Оптимальный набор функций для старта и комфортного использования. Подходит для небольших проектов",
    buttonText: "Выбрать план",
    bgColor: "bg-white",
    textColor: "text-btnback",
    bgBtn: "bg-btnback",
  },
  {
    title: "Про",
    price: "10$",
    description:
      "Расширенные возможности для профессионального использования. Максимальный функционал для решения любых задач",
    buttonText: "Выбрать план",
    bgColor: "bg-btnback",
    textColor: "text-white",
    bgBtn: "bg-white",
  },
];
