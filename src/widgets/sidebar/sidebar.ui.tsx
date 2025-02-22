import React from "react";
import { useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import Calendar from "~shared/assets/SideBarIcon/Calendar.png";
import Paper from "~shared/assets/SideBarIcon/Paper.png";
import Setting from "~shared/assets/SideBarIcon/Setting.png";
import User from "~shared/assets/SideBarIcon/User.png";
import Specialist from "~shared/assets/SideBarIcon/specialist.png";

export const Sidebar = () => {
  const [activePage, setActivePage] = React.useState("specialists");

  const menuItems = [
    { id: "calendar", text: "Календарь", icon: Calendar },
    { id: "specialists", text: "Специалисты", icon: Specialist },
    { id: "clients", text: "Список клиентов", icon: Paper },
  ];

  const configItems = [
    { id: "profile", text: "Личный кабинет", icon: User },
    { id: "settings", text: "Настройки", icon: Setting },
  ];

  return (
    <div className="">
      <div className=" w-[220px] bg-white h-[472px] pt-5 border-r border-[#EBEBEB]">
        <div className="flex items-center gap-2">
          <div className="w-[60px] h-[60px] bg-black"></div>
          <Typography className="font-semibold text-2xl text-black">
            Weasy
          </Typography>
        </div>
        <Typography className="font-medium text-[13px] text-[#44505C] py-4 pl-[10px] font-[Inter]">
          Меню
        </Typography>
        <div>
          {menuItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                selected={activePage === item.id}
                onClick={() => setActivePage(item.id)}
                sx={{
                  height: "56px",

                  "&.Mui-selected": {
                    backgroundColor: "#EBEBEB",
                  },
                }}
              >
                <div className="flex items-center gap-[12px] h-[56px] ">
                  <img src={item.icon} alt="" />
                  <Typography
                    sx={{ color: activePage === item.id ? "#303030" : "#666" }}
                  >
                    {item.text}
                  </Typography>
                </div>
              </ListItemButton>
            </ListItem>
          ))}
        </div>
        <Typography className="font-medium text-[13px] text-[#44505C] py-4 pl-[10px] font-[Inter]">
          Конфигурация
        </Typography>
        <List>
          {configItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                selected={activePage === item.id}
                onClick={() => setActivePage(item.id)}
                sx={{
                  height: "56px",

                  "&.Mui-selected": {
                    backgroundColor: "#EBEBEB",
                  },
                }}
              >
                <div className=" flex items-center gap-[12px] h-[56px]">
                  <img src={item.icon} alt="" />
                  <Typography
                    sx={{ color: activePage === item.id ? "#303030" : "#666" }}
                  >
                    {item.text}
                  </Typography>
                </div>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};
