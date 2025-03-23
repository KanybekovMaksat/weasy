import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { ChevronRight, LocationOn } from "@mui/icons-material";
import serviseImg from "~shared/assets/service/carbon_web-services-container.png";
interface ServiceCardProps {
  doctor: string;
  price: string;
  timer: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  doctor,
  price,
  timer,
}) => {
  return (
    <Card className="w-full flex justify-between items-center px-[17px] py-[20px] border-[2px] border-solid border-[#F0F1F3] rounded-xl font-[Nunito]">
      <div className="flex items-center justify-between w-full">
        <div className="border-[2px] border-solid border-[#F0F1F3] rounded-[10px] p-[10px] mr-[15px]">
          <img src={serviseImg} className="w-[18px] h-[18px]" />
        </div>
        <div className="flex-grow">
          <Typography
            variant="h6"
            className="font-semibold text-base text-btnback"
          >
            {doctor}
          </Typography>
          <Typography
            variant="body2"
            className="text-[#5C5C5C] font-medium text-sm"
          >
            Медицина
          </Typography>
        </div>
        <div className="flex-grow text-center">
          <Typography
            variant="h6"
            className="font-semibold text-sm text-[#91929E]"
          >
            Цена
          </Typography>
          <Typography
            variant="body2"
            className="text-[#0A1629] font-[Inter] text-base"
          >
            {price}
          </Typography>
        </div>
        <div className="flex-grow text-center">
          <Typography
            variant="h6"
            className="font-semibold text-sm text-[#91929E]"
          >
            Длительность
          </Typography>
          <Typography
            variant="body2"
            className="text-[#0A1629] font-[Inter] text-base"
          >
            {timer}
          </Typography>
        </div>
        <IconButton className="bg-[#F0F1F3] rounded-[4px] ">
          <ChevronRight />
        </IconButton>
      </div>
    </Card>
  );
};
