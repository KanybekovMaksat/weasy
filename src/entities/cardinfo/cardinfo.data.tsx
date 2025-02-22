import { CardItemProps } from "./cardinfo.ui.tsx";
import clockicon from "~shared/assets/CardInfoIcon/clockicon.png";
import helpicon from "~shared/assets/CardInfoIcon/helpicon.png";
import dateicon from "~shared/assets/CardInfoIcon/dataicon.png";


export const CardsData: CardItemProps[] = [
  {
    icon: clockicon,
    title: (
      <>
        <span className="text-[#4C6980]"> Создание лендинга</span> <br /> за 10
        минут
      </>
    ),
    description: ` Создайте персонализированный лендинг с удобным модулем записи" 
      
      "Настройте график работы  и принимайте записи без сложностей.`,
  },
  {
    icon: helpicon,
    title: (
      <>
        <span className="text-[#4C6980]"> Ваши данные </span> <br /> под защитой
      </>
    ),
    description:
      "Мы гарантируем высокий уровень безопасности и конфиденциальности ваших данных",
  },
  {
    icon: dateicon,
    title: (
      <>
        <span className="text-[#4C6980]">Гибкость</span> работы
      </>
    ),
    description:
      "Управляйте своим временем с помощью интуитивно понятного календаря",
  },
];
