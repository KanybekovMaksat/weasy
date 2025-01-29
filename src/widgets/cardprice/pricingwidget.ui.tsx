import { Box, Typography } from "@mui/material";
import React from "react";
import { CardPrice, PricingData } from "~entities/cardprice";
export const PricingWidget: React.FC = () => {
  return (
    <Box className="mb-[90px]">
      <div className="container">
        <Box sx={{ margin: "0 auto" }} className="text-center max-w-[593px] ">
          <Typography
            variant="h3"
            className="text-[32px] font-semibold text-btnback  "
          >
            Наши цены
          </Typography>
          <Typography
            variant="body2"
            className="font-normal text-lg text-btnback mt-[15px] mb-[40px] leading-[28.8px] "
          >
            Выберите план, который подходит именно вам. Все тарифы прозрачны,
            без скрытых платежей
          </Typography>
        </Box>
        <Box className="flex  justify-between">
          {PricingData.map((plan, index) => (
            <CardPrice key={index} {...plan} />
          ))}
        </Box>
      </div>
    </Box>
  );
};
