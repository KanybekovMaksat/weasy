import React from "react";
import { AccordionItem, accordionData } from "~entities/accordion";
import { Box, Typography } from "@mui/material";
import { Reveal } from "~shared/lib/framer";
export const AccordionWidget: React.FC = () => {
  return (
    <Box>
      <div className="container">
        <Reveal from="bottom" delay={0.3}>
          <Box className="text-center ">
            <Typography
              variant="h3"
              className="font-semibold text-[32px] leading-[44px] text-btnback pb-[40px] "
            >
              Часто задаваемые вопросы
            </Typography>
          </Box>
        </Reveal>
        <Reveal from="top" delay={0.3}>
          {" "}
          <Box>
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                quiz={item.quiz}
                title={item.title}
                content={item.content}
              />
            ))}
          </Box>
        </Reveal>
      </div>
    </Box>
  );
};
