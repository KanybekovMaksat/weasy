import avatar from "~shared/assets/staffImg/doctorAva.png";

export type Client = {
  id: number;
  name: string;
  phone: string;
  visited: number;
  paid: string;
  avatar: string;
};

export const clientsMock: Client[] = [
  {
    id: 1,
    name: "Асанов Асан Асанбекович",
    phone: "+996 555 122 120",
    visited: 5,
    paid: "1200 сом",
    avatar: avatar,
  },
  {
    id: 2,
    name: "Иванова Мария Петровна",
    phone: "+996 700 123 456",
    visited: 3,
    paid: "800 сом",
    avatar: avatar,
  },
  {
    id: 3,
    name: "Петров Иван Сергеевич",
    phone: "+996 555 789 123",
    visited: 7,
    paid: "1500 сом",
    avatar: avatar,
  },
  {
    id: 4,
    name: "Сидорова Анна Владимировна",
    phone: "+996 700 456 789",
    visited: 2,
    paid: "500 сом",
    avatar: avatar,
  },
  {
    id: 5,
    name: "Козлов Дмитрий Александрович",
    phone: "+996 555 321 654",
    visited: 10,
    paid: "2000 сом",
    avatar: avatar,
  },
];
