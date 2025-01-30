import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { pathKeys } from "~shared/lib/react-router";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      className="bg-white shadow-none font-medium px-6 md:px-20 "
    >
      <div className="container">
        <Toolbar className="flex justify-between pt-[20px] pb-[20px]">
          <Link to={pathKeys.home()} className="flex items-center gap-2">
            <Box className="w-[60px] h-[60px] bg-black"></Box>
            <Typography className="font-semibold text-2xl text-black">
              Weasy
            </Typography>
          </Link>

          <div className="hidden md:flex items-center gap-6">
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
          <div className="flex items-center gap-4">
            <Button
              variant="text"
              className="text-[18px] text-black font-sans normal-case"
            >
              Войти
            </Button>
            <Button
              variant="contained"
              className=" text-[18px] bg-btnback  normal-case rounded-[10px]"
            >
              Зарегистрироваться
            </Button>
          </div>
        </Toolbar>
      </div>
    </AppBar>
  );
};
