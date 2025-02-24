export type WorkDay = {
  day: string;
  isWeekend: boolean;
  hours?: string[];
};

export type Doctor = {
  id: number;
  name: string;
  specialty: string;
  avatar: string;
  schedule: WorkDay[];
};

export const doctorsMock: Doctor[] = [
  {
    id: 1,
    name: "Асанов Асан Асанбекович",
    specialty: "Кардиолог",
    avatar: "/images/doctor1.png",
    schedule: [
      {
        day: "Пн 21",
        isWeekend: false,
        hours: ["09:00 - 12:00", "13:00 - 18:00"],
      },
      {
        day: "Вт 22",
        isWeekend: false,
        hours: ["09:00 - 12:00", "13:00 - 18:00"],
      },
      {
        day: "Ср 23",
        isWeekend: false,
        hours: ["09:00 - 12:00", "13:00 - 18:00"],
      },
      {
        day: "Чт 24",
        isWeekend: false,
        hours: ["09:00 - 12:00", "13:00 - 18:00"],
      },
      {
        day: "Пт 25",
        isWeekend: false,
        hours: ["09:00 - 12:00", "13:00 - 18:00"],
      },
      { day: "Сб 26", isWeekend: true },
    ],
  },
  {
    id: 2,
    name: "Асанов Асан ",
    specialty: "Кардиолог",
    avatar: "/images/doctor1.png",
    schedule: [
      {
        day: "Пн 21",
        isWeekend: false,
        hours: ["09:00 - 12:00", "13:00 - 18:00"],
      },
      {
        day: "Вт 22",
        isWeekend: false,
        hours: ["09:00 - 12:00", "13:00 - 18:00"],
      },
      {
        day: "Ср 23",
        isWeekend: false,
        hours: ["09:00 - 12:00", "13:00 - 18:00"],
      },
      {
        day: "Чт 24",
        isWeekend: false,
        hours: ["09:00 - 12:00", "13:00 - 18:00"],
      },
      {
        day: "Пт 25",
        isWeekend: false,
        hours: ["09:00 - 12:00", "13:00 - 18:00"],
      },
      { day: "Сб 26", isWeekend: true },
    ],
  },
];
