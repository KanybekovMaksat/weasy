import React from "react";
import { Industry } from "./model/Industries.types";
import { Card, Typography, CardContent } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import arrow from "~shared/assets/industryIcon/arrow.png";
import { useNavigate } from "react-router-dom";
type IndustryCardProps = {
  industry: Industry;
};
export const IndustriesCard: React.FC<IndustryCardProps> = ({ industry }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ maxWidth: 400 }}
      className="group relative flex flex-col items-start p-[30px] w-full h-full bg-white rounded-2xl shadow-lg transition-transform hover:scale-105"
    >
      <CardContent sx={{ maxWidth: 335 }}>
        <div className="flex items-center justify-between">
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
          <img
            className="text-black px-[25px] py-[20px] rounded-md   bg-[#F0F3F9]"
            onClick={() => navigate(`/industries/${industry.slug}`)}
            src={arrow}
            alt=""  
          />
        </div>
        <Typography
          typography="body2"
          className="font-medium text-base text-center text-btnback pt-[20px]"
        >
          {industry.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
