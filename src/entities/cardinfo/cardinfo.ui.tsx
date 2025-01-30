import React from "react";
import { ReactNode } from "react";
import clockicon from "../../../public/CardInfoIcon/clockicon.svg";
import helpicon from "../../../public/CardInfoIcon/helpicon.svg";
import dateicon from "../../../public/CardInfoIcon/dateicon.svg";
import { Box, CardMedia, Typography, CardContent, Card } from "@mui/material";

export interface CardItemProps {
  icon: string;
  title: React.ReactNode;
  description: string;
}

export const CardInfo: React.FC<CardItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Card
      sx={{ maxWidth: 400 }}
      className="rounded-[10px] pt-[30px] pr-[30px] pl-[30px] pb-[30px]  transition-all transform hover:scale-105 hover:shadow-lg hover:-translate-y-2   "
    >
      <CardContent sx={{ width: 340, padding: 0 }}>
        <div className="flex  items-center gap-x-[20px] pb-[20px]">
          <img src={icon} alt="" />
          <Typography
            className="text-[24px] font-bold leading-[33.6px] "
            variant="h3"
          >
            {title}
          </Typography>
        </div>
        <Typography
          variant="body2"
          className="text-[18px] font-medium text-btnback leading-[28.8px] whitespace-normal break-words"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
