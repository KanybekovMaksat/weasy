import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { pathKeys } from "~shared/lib/react-router";

export function Footer() {
  return (
    <Box
      component="footer"
      className="bg-[#F9F9FA] text-black py-8 px-6 md:px-20"
    >
      <div className="container ">
        <div className="mx-auto flex flex-col lg:flex-row gap-x-[120px] items-center ">
          <Link to="/" className="flex items-center mb-6 lg:mb-0">
            <div className="gap-2 flex items-center">
              <Box className="w-[60px] h-[60px] bg-black"></Box>
              <Typography className="font-semibold text-2xl text-black">
                Weasy
              </Typography>
            </div>

          </Link>

          <div className=" items-center gap-6 flex max-sm:grid ">
            <Link
              to={pathKeys.program()}
              className="text-black hover:text-btnback font-medium text-[18px]"
            >
              О программе
            </Link>
            <Link
              to={pathKeys.advantages()}
              className="text-black hover:text-btnback font-medium text-[18px]"
            >
              Преимущества
            </Link>
            <Link
              to={pathKeys.subscriptions()}
              className="text-black hover:text-btnback font-medium text-[18px]"
            >
              Подписки
            </Link>
            <Link
              to={pathKeys.reviews()}
              className="text-black hover:text-btnback font-medium text-[18px]"
            >
              Отзывы
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-[#ADADAD] pt-4"></div>
    </Box>
  );
}
