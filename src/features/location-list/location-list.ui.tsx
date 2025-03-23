import React from "react";
import { LocationCard } from "~entities/location-card";
import { Typography } from "@mui/material";
import { Reveal } from "~shared/lib/framer";
const locations = [
  {
    name: "Bishkek medical center",
    address:
      'г. Бишкек, улица: Чокана Валиханова 14/1, "Bishkek medical center"',
  },
  {
    name: "Bishkek medical center",
    address:
      'г. Бишкек, улица: Чокана Валиханова 14/1, "Bishkek medical center"',
  },
  {
    name: "Bishkek medical center",
    address:
      'г. Бишкек, улица: Чокана Валиханова 14/1, "Bishkek medical center"',
  },
  {
    name: "Bishkek medical center",
    address:
      'г. Бишкек, улица: Чокана Валиханова 14/1, "Bishkek medical center"',
  },
];

export const LocationsList: React.FC = () => {
  return (
    <div className="pt-[55px] pl-[20px]">
      <Typography variant="h5" className="mb-[30px] font-bold font-[Nunito]">
        Локация
      </Typography>
      <Reveal from="right" delay={0.3}>
        <div className="space-y-4">
          {locations.map((loc, index) => (
            <LocationCard key={index} name={loc.name} address={loc.address} />
          ))}
        </div>
      </Reveal>
    </div>
  );
};
