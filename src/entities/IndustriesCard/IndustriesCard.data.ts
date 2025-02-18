import { Industry } from "./model/Industries.types";
import flower from "~shared/assets/industryIcon/flower.png";
import help from "~shared/assets/industryIcon/help.svg";
import sport from "~shared/assets/industryIcon/sport.svg";
import service from "~shared/assets/industryIcon/servis.png";
import gaming from "~shared/assets/industryIcon/gaming.png";
import study from "~shared/assets/industryIcon/study.png";
import animal from "~shared/assets/industryIcon/animal.png";
import rental from "~shared/assets/industryIcon/gravity.png";
import car from "~shared/assets/industryIcon/car.png";

export const industries: Industry[] = [
  {
    id: 1,
    title: "Красота",
    description: "Для салонов, парикмахеров и косметологических услуг.",
    icon: flower,
    slug: "beauty",
  },
  {
    id: 2,
    title: "Медицина",
    description: "Для медицинских центров, клиник и врачебных кабинетов.",
    icon: help,
    slug: "medicine",
  },
  {
    id: 3,
    title: "Спорт",
    description: "Для тренажерных залов, йога-студий и фитнес-центров.",
    icon: sport,
    slug: "sport",
  },
  {
    id: 4,
    title: "Сервис",
    description: "Для уборки, ремонтных мастерских и юридических услуг.",
    icon: service,
    slug: "service",
  },
  {
    id: 5,
    title: "Развлечение",
    description: "Для VR клубов, квест-комнат и других мероприятий.",
    icon: gaming,
    slug: "entertainment",
  },
  {
    id: 6,
    title: "Обучение",
    description: "Для репетиторов, школ и детских классов.",
    icon: study,
    slug: "education",
  },
  {
    id: 7,
    title: "Животные",
    description:
      "Для ветеринарных клиник, салонов по уходу и услуг для домашних животных.",
    icon: animal,
    slug: "animals",
  },
  {
    id: 8,
    title: "Аренда",
    description:
      "Для фотостудий, коворкинг-пространств и мест проведения мероприятий.",
    icon: rental,
    slug: "rental",
  },
  {
    id: 9,
    title: "Авто",
    description: "Для автосервисов, выставочных залов и моек.",
    icon: car,
    slug: "auto",
  },
];
