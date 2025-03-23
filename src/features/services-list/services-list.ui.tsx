import React from "react";
import { ServiceCard } from "~entities/service-card";
import { Typography } from "@mui/material";
import { Reveal } from "~shared/lib/framer";
const services = [
  {
    doctor: "Терапевт",
    price: "1700 сом",
    timer: "20 минут",
  },
  {
    doctor: "Стоматолог",
    price: "1500 сом",
    timer: "45 минут",
  },
  {
    doctor: "Педиатр",
    price: "1300 сом",
    timer: "30 минут",
  },
  {
    doctor: "Дерматолог",
    price: "1200 сом",
    timer: "35 минут",
  },
  {
    doctor: "Гинеколог",
    price: "2000 сом",
    timer: "60 минут",
  },
  {
    doctor: "Офтальмолог",
    price: "1000 сом",
    timer: "25 минут",
  },
];

export const ServicesList: React.FC = () => {
  return (
    <div className="pt-[55px] pl-[20px]">
      <Typography variant="h5" className="mb-[30px] font-bold font-[Nunito]">
        Услуги
      </Typography>
      <Reveal from="right" delay={0.3}>
        <div className="space-y-4">
          {services.map((ser, index) => (
            <ServiceCard
              key={index}
              doctor={ser.doctor}
              price={ser.price}
              timer={ser.timer}
            />
          ))}
        </div>
      </Reveal>
    </div>
  );
};
