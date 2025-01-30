import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Reveal } from "~shared/lib/framer";
export const ConsultationBlock: React.FC = () => {
  return (
    <Box className="mt-[70px] mb-[90px]">
      <div className="container">
        <Box sx={{ margin: "0 auto" }} className="text-center max-w-[650px]">
          <Reveal from="right" delay={0.3}>
            <Typography
              variant="h3"
              className="text-[32px] text-btnback font-semibold leading-[44px]"
            >
              Начните строить свой успешный онлайн-бизнес уже сегодня
            </Typography>
          </Reveal>
          <Reveal from="left" delay={0.3}>
            <Typography
              variant="body2"
              className="font-normal text-[18px] text-btnback
          leading-[25px] mt-[20px] mb-[30px]"
            >
              Свяжитесь с нами для получения профессиональной консультации. Мы
              поможем вам настроить эффективные инструменты для продвижения и
              увеличения продаж.
            </Typography>
          </Reveal>
          <Reveal from="bottom" delay={0.3}>
            <Button
              variant="contained"
              className="bg-btnback font-semibold text-[18px] rounded-[10px] normal-case px-[20px] py-[12px]"
            >
              Получить бесплатную консультацию
            </Button>
          </Reveal>
        </Box>
      </div>
    </Box>
  );
};
