import React from "react";
import { IndustriesCard } from "~entities/IndustriesCard";
import { industries } from "~entities/IndustriesCard";
import { Typography, Box } from "@mui/material";
import { Reveal } from "~shared/lib/framer";
import logo from '~shared/assets/logo/logo.svg'

export const IndustrySection: React.FC = () => {
  return (
    <>
      <div className="container">
        <Box className="max-w-[668px] mx-auto">
          <Reveal from="right" delay={0.3}>
            {" "}
            <Typography
              variant="h3"
              className="font-semibold text-[28px] text-btnback text-center pt-[40px]"
            >
              В какой отрасли работает ваш бизнес?
            </Typography>
          </Reveal>
          <Reveal from="left" delay={0.3}>
            <Typography
              variant="body2"
              className="font-normal text-base text-black text-center pt-[10px] pb-[40px]"
            >
              Выбор правильной категории помогает нам настроить систему в
              соответствии с вашими конкретными потребностями.
            </Typography>
          </Reveal>
        </Box>
        <Reveal from="bottom" delay={0.3}>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 pb-[120px]">
            {industries.map((industry) => (
              <IndustriesCard key={industry.id} industry={industry} />
            ))}
          </div>
        </Reveal>
      </div>
    </>
  );
};
