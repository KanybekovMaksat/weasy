import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { ChevronRight, LocationOn } from "@mui/icons-material";

interface LocationCardProps {
  name: string;
  address: string;
}

export const LocationCard: React.FC<LocationCardProps> = ({
  name,
  address,
}) => {
  return (
    <Card className="w-full flex justify-between items-center px-[17px] py-[20px] border-[2px] border-solid border-[#F0F1F3] rounded-xl font-[Nunito]">
      <div className="flex items-center justify-between w-full">
        <div className="border-[2px] border-solid border-[#F0F1F3] rounded-[10px] p-[10px] mr-[15px]">
          <LocationOn className="w-[18px] h-[18px]" />
        </div>
        <div className="flex-grow">
          <Typography
            variant="h6"
            className="font-semibold text-base text-btnback"
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            className="text-[#5C5C5C] font-medium text-sm"
          >
            {address}
          </Typography>
        </div>
        <IconButton className="bg-[#F0F1F3] rounded-[4px] ">
          <ChevronRight />
        </IconButton>
      </div>
    </Card>
  );
};
