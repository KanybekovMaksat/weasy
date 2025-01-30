import React from "react";
import { Box, Typography, CardContent, Card } from "@mui/material";

export interface ReviewCardProps {
  avatar: string;
  name: string;
  profession: string;
  reviewText: string;
}
export const ReviewCard: React.FC<ReviewCardProps> = ({
  avatar,
  name,
  profession,
  reviewText,
}) => {
  return (
    <Card sx={{ maxWidth: 551 }} className="p-[30px] bg-white rounded-[10px]  transition-all transform hover:scale-105 hover:shadow-lg hover:-translate-y-2">
      <CardContent sx={{ maxWidth: 491, padding: 0 }}>
        <Box className="flex items-center gap-x-[30px]">
          <img
            alt="Reviewer"
            src={avatar}
            className="w-[100px] h-[100px] rounded-[50%]"
          />
          <Box sx={{ ml: 2 }}>
            <Typography
              variant="h6"
              className="text-btnback text-[24px] font-semibold"
              gutterBottom
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              className="text-btnback text-[16px] font-normal leading-[22.4px] pt-[10px"
            >
              {profession}
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="body1"
          className="font-medium font-[18px] leading-[28px] text-btnback pt-[30px] "
          gutterBottom
        >
          {reviewText}
        </Typography>
      </CardContent>
    </Card>
  );
};
