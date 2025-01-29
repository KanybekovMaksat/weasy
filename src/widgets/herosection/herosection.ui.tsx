import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import slider from "~shared/assets/Slider/slider.png";
import phoneslider from "~shared/assets/Slider/phoneslider.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const images = {
  desktop: [slider, slider, slider, slider],
  mobile: [phoneslider, phoneslider, phoneslider, phoneslider],
};

export const HeroSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  const handleSwitchToDesktop = () => setViewMode("desktop");

  const handleSwitchToMobile = () => setViewMode("mobile");

  const desktopButtonStyles =
    viewMode === "desktop"
      ? "bg-btnback text-[18px] normal-case rounded-[10px] text-white w-[209px] "
      : "text-[18px] normal-case rounded-[10px] border-btnback border-none text-black w-[209px]";

  const mobileButtonStyles =
    viewMode === "mobile"
      ? "bg-btnback text-[18px] normal-case rounded-[10px] text-white w-[209px"
      : "text-[18px] normal-case rounded-[10px] border-btnback border-none text-black w-[209px]";

  return (
    <Box className="pb-[90px]">
      <div className="container">
        <Box className="flex items-center gap-[70px]">
          <div>
            <Typography variant="h3" className="text-[32px] font-semibold ">
              Создайте свой уникальный лендинг легко и быстро
            </Typography>
            <Typography
              variant="subtitle2"
              className="text-lg font-normal normal-case text-btnback mt-[20px] mb-[20px]  "
            >
              На нашей платформе вы сможете разработать персонализированный
              лендинг с удобным графиком работы, услугами и отзывами. Все
              просто, понятно и эффективно!
            </Typography>
            <Button
              variant="contained"
              className=" text-[18px] bg-btnback rounded-[8px]  normal-case rounded-[10px]"
            >
              Создать лендинг
            </Button>
          </div>
          <div>
            <Box className="bg-btnback w-[720px] p-[30px] rounded-[10px] ">
              <div className=" w-[400px] flex bg-white p-[10px]  rounded-[10px] mb-[30px] gap-[10px]">
                <Button
                  variant={viewMode === "desktop" ? "contained" : "outlined"}
                  onClick={handleSwitchToDesktop}
                  className={desktopButtonStyles}
                >
                  Сайты
                </Button>
                <Button
                  variant={viewMode === "mobile" ? "contained" : "outlined"}
                  onClick={handleSwitchToMobile}
                  className={mobileButtonStyles}
                >
                  Мобильные
                </Button>
              </div>
              <Swiper
                spaceBetween={50}
                slidesPerView={3}
                loop
                className="mySwiper"
              >
                {images[viewMode].map((image, index) => (
                  <SwiperSlide key={index} className="w-[200px]">
                    <img
                      src={image}
                      alt=""
                      className="max-w-[200px] max-h-[370px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </div>
        </Box>
      </div>
    </Box>
  );
};
