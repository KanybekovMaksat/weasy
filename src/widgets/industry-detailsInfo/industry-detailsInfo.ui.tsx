import { Typography, Button } from "@mui/material";
import React from "react";
import { Industry } from "~entities/IndustriesCard";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import dre from "~shared/assets/industryDetailImg/dre.png";
import { Reveal } from "~shared/lib/framer";
export const IndustryDetailsInfo: React.FC<{ industry: Industry }> = ({
  industry,
}) => {
  const navigate = useNavigate();

  return (
    <div className="mt-[40px] mb-[60px]">
      <div className="container">
        <div className="flex  justify-between p-[30px]  bg-white rounded-[10px]">
          <Reveal from="right" delay={0.3}>
            <div>
              <div className="flex items-center gap-[15px]">
                <img
                  className="p-[10px] rounded-md  bg-[#F0F3F9]"
                  src={industry.icon}
                  alt=""
                />
                <Typography
                  variant="h6"
                  className="font-bold text-[20px] text-btnback"
                >
                  {industry.title}
                </Typography>
              </div>
              <Typography
                variant="body2"
                className="font-medium text-base text-center text-btnback pt-[20px]"
              >
                {industry.description}
              </Typography>
              <Button
                onClick={() => navigate(-1)}
                startIcon={<KeyboardBackspaceIcon />}
                className="text-black normal-case font-medium text-base mt-[30px]"
                sx={{
                  border: "1px solid #303030",
                }}
              >
                Назад
              </Button>
            </div>
          </Reveal>
          <Reveal from="left" delay={0.3}>
            <img src={dre} alt="" />
          </Reveal>
        </div>
      </div>
    </div>
  );
};
