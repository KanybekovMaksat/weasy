import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
  Drawer,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { pathKeys } from "~shared/lib/react-router";
import { useNavigate } from "react-router-dom";

export const HomeHeader: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <AppBar position="static" className="bg-white shadow-none font-medium ">
      <div className="container">
        <Toolbar className="flex justify-between pt-[20px] pb-[20px] pl-[0]">
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

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="text"
              className="text-[18px] text-black font-sans normal-case"
              onClick={() => navigate(pathKeys.login())}
            >
              Войти
            </Button>
            <Button
              variant="contained"
              className="text-[18px] bg-btnback normal-case rounded-[10px]"
              onClick={() => navigate(pathKeys.registration())}
            >
              Зарегистрироваться
            </Button>
          </div>

          <IconButton
            className="md:hidden"
            onClick={() => setOpen(true)}
            edge="end"
          >
            <MenuIcon className="text-black" />
          </IconButton>
        </Toolbar>
      </div>

      <Drawer
        anchor="bottom"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            height: "auto",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            padding: "20px",
          },
        }}
      >
        <Box className="flex flex-col items-center gap-4">
          <IconButton onClick={() => setOpen(false)} className="self-end">
            <CloseIcon />
          </IconButton>

          <Box className="grid flex-wrap justify-center gap-4">
            <Link
              to={pathKeys.program()}
              className="text-black text-lg"
              onClick={() => setOpen(false)}
            >
              О программе
            </Link>
            <Link
              to={pathKeys.advantages()}
              className="text-black text-lg"
              onClick={() => setOpen(false)}
            >
              Преимущества
            </Link>
            <Link
              to={pathKeys.subscriptions()}
              className="text-black text-lg"
              onClick={() => setOpen(false)}
            >
              Подписки
            </Link>
            <Link
              to={pathKeys.reviews()}
              className="text-black text-lg"
              onClick={() => setOpen(false)}
            >
              Отзывы
            </Link>
          </Box>

          <Box className="flex flex-wrap justify-center gap-4">
            <Button
              variant="text"
              className="text-[18px] text-black font-sans normal-case"
            >
              Войти
            </Button>
            <Button
              variant="contained"
              className="text-[18px] bg-btnback normal-case rounded-[10px]"
            >
              Зарегистрироваться
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};
