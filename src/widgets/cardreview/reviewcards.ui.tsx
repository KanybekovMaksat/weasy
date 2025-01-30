import React from "react";
import { Box, Typography } from "@mui/material";
import { ReviewCard, ReviewsData } from "~entities/reviewscard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Reveal } from "~shared/lib/framer";
export const ReviewWidget: React.FC = () => {
  return (
    <Box className="mb-[90px]">
      <div style={{ margin: "0 auto" }} className="container">
        <Reveal from="top" delay={0.3}>
          <Box className="text-center">
            <Typography
              variant="h3"
              className="text-[32px] font-semibold text-btnback"
            >
              Отзывы клиентов
            </Typography>
          </Box>
        </Reveal>
        <Reveal from="left" delay={0.3}>
          <Swiper
            slidesPerView={2.5}
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
            className="review-swiper mt-[40px]  "
          >
            {ReviewsData.map((review, index) => (
              <SwiperSlide key={index}>
                <ReviewCard {...review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </Box>
  );
};
