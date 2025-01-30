import { Card, CardContent, Typography, Button } from "@mui/material";
import React from "react";

export interface PriceCardProps  {
  title: string;
  price: string;
  description: string;
  buttonText: string;
  bgColor: string;
  textColor: string;
  bgBtn: string;
};

export const CardPrice: React.FC<PriceCardProps> = ({
  title,
  price,
  description,
  buttonText,
  bgColor,
  textColor,
  bgBtn,
}) => {
  return (
    <Card
      sx={{ maxWidth: 402 }}
      className={`${bgColor} relative  rounded-[10px]  text-center  pt-[25px] pr-[45px] pl-[45px] pb-[25px]  transition-all transform hover:scale-105 hover:shadow-lg hover:-translate-y-2 `}
    >
      <CardContent sx={{ maxWidth: 325, padding: 0, maxHeight: 328 }}>
        <Typography className={`${textColor} text-2xl font-semibold`}>
          {title}
        </Typography>
        <Typography
          className={`${textColor} font-semibold text-[40px] pt-[40px] pb-[40px]`}
        >
          {price}
        </Typography>
        <Typography
          className={`${textColor} text-base font-medium leading-[22.4px]`}
        >
          {description}
        </Typography>
        <Button
          className={`w-[204px]  rounded-[8px] normal-case font-semibold mt-[20px] text-[18px] transition  ${bgBtn} ${
            bgColor === "bg-white"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};
