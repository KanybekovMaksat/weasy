import React from "react";
import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Calendar from "~shared/assets/SideBarIcon/Calendar.png";
import Paper from "~shared/assets/SideBarIcon/Paper.png";
import Setting from "~shared/assets/SideBarIcon/Setting.png";
import User from "~shared/assets/SideBarIcon/User.png";
import Specialist from "~shared/assets/SideBarIcon/specialist.png";
import { pathKeys } from "~shared/lib/react-router";

export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      id: "calendar",
      text: "Календарь",
      icon: Calendar,
      path: pathKeys.calendar(),
    },
    {
      id: "specialists",
      text: "Специалисты",
      icon: Specialist,
      path: pathKeys.specialists(),
    },
    {
      id: "clients",
      text: "Список клиентов",
      icon: Paper,
      path: pathKeys.clients(),
    },
  ];

  const configItems = [
    {
      id: "profile",
      text: "Личный кабинет",
      icon: User,
      path: pathKeys.profile,
    },
    {
      id: "settings",
      text: "Настройки",
      icon: Setting,
      path: pathKeys.settings(),
    },
  ];

  return (
    <div className="">
      <div className="w-[220px] bg-white h-[472px] pt-5 border-r border-[#EBEBEB]">
        <div className="flex items-center gap-2 pl-[10px]">
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
                selected={location.pathname === item.path}
                onClick={() => navigate(item.path)}
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
                    sx={{
                      color:
                        location.pathname === item.path ? "#303030" : "#666",
                    }}
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
                selected={location.pathname === item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  height: "56px",
                  "&.Mui-selected": {
                    backgroundColor: "#EBEBEB",
                  },
                }}
              >
                <div className="flex items-center gap-[12px] h-[56px]">
                  <img src={item.icon} alt="" />
                  <Typography
                    sx={{
                      color:
                        location.pathname === item.path ? "#303030" : "#666",
                    }}
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
