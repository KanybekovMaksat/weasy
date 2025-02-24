import React, { useState } from "react";
import {
  Toolbar,
  Typography,
  Box,
  Button,
  Popover,
  List,
  ListItem,
  Divider,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import bell from "~shared/assets/header-user/Bell.png";
import ava from "~shared/assets/header-user/ava.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from "@mui/icons-material/Edit";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { pathKeys } from "~shared/lib/react-router";
export const HeaderUser: React.FC = () => {
  const [anchorElNotifications, setAnchorElNotifications] =
    useState<HTMLElement | null>(null);
  const [anchorElProfile, setAnchorElProfile] = useState<HTMLElement | null>(
    null
  );
  const navigate = useNavigate();

  const handleNotificationsOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNotifications(event.currentTarget);
  };

  const handleProfileOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElNotifications(null);
    setAnchorElProfile(null);
  };

  const handleLogout = () => {
    navigate(pathKeys.login());
    handleClose();
  };

  const handleEditProfile = () => {
    navigate("/profile/edit");
    handleClose();
  };
  return (
    <div className="bg-white shadow-none font-medium ">
      <Toolbar className="flex items-center justify-between pl-[24px] pr-0 ">
        <Typography className="font-medium font-[Inter] text-lg text-btnback">
          Bishkek medical center
        </Typography>

        <div className="flex items-center gap-6 ">
          <Button
            sx={{ border: "1px solid #DFE1E7 ", minWidth: 0 }}
            className="p-2 rounded-[10px] "
            onClick={handleNotificationsOpen}
          >
            <img src={bell} alt="" />
          </Button>
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleProfileOpen}
          >
            <img
              src={ava}
              alt=""
              className="w-[42px] h-[42px] rounded-full object-cover"
            />
            <div className="">
              <Typography className="font-[Inter] text-lg text-btnback">
                Асанбекова Асанкуль
              </Typography>
              <Typography className="text-[#4C6980] font-[Inter] text-sm">
                Админ
              </Typography>
            </div>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </Toolbar>
      <Popover
        open={Boolean(anchorElNotifications)}
        anchorEl={anchorElNotifications}
        onClose={handleClose}
        anchorPosition={{
          top: window.innerHeight / 2,
          left: window.innerWidth / 2,
        }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        BackdropProps={{
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(2px)",
          },
        }}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "12px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            width: "456px",
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <Box>
          <List
            sx={{
              padding: "25px",
            }}
          >
            {[1, 2].map((item) => (
              <Box key={item}>
                <Box>
                  <ListItem
                    sx={{
                      display: "flex",
                      columnGap: "60px",
                      padding: 0,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 400,
                        fontFamily: "Inter",
                        fontSize: 16,
                        color: "#222222",
                      }}
                    >
                      Клиент
                      <span style={{ fontWeight: 500 }}> Асанов Асан </span>
                      записался на услугу “Кардиология”
                    </Typography>
                    <Typography>13:30</Typography>
                  </ListItem>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      width: "100%",
                    }}
                  >
                    <Button
                      variant="text"
                      sx={{
                        textTransform: "none",
                        textDecoration: "underline",
                        color: "#303030",
                        fontSize: "14px",
                        "&:hover": { backgroundColor: "transparent" },
                        display: "flex",
                        justifyContent: "self-end",
                        alignItems: "flex-end",
                      }}
                    >
                      Посмотреть
                    </Button>
                  </Box>
                </Box>
                {item < 2 && <Divider sx={{ my: 1 }} />}
              </Box>
            ))}
          </List>
        </Box>
      </Popover>

      <Popover
        open={Boolean(anchorElProfile)}
        anchorEl={anchorElProfile}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        BackdropProps={{
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(2px)",
          },
        }}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "12px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <Box sx={{ padding: "42px 25px", textAlign: "center" }}>
          <Box sx={{ mb: 2, px: 1 }}>
            <Avatar
              src={ava}
              sx={{ width: 96, height: 96, margin: "auto", objectFit: "cover" }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 400,
                fontSize: "15px",
                color: "#222222",
                fontFamily: "Inter",
                padding: "10px 0 ",
              }}
            >
              Асанбекова Асанкуль
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#595959", fontSize: "15px ", fontFamily: "Inter" }}
            >
              asanbaekovaasankul@gmail.com
            </Typography>
            <Button
              onClick={handleEditProfile}
              sx={{
                borderRadius: "8px",
                textTransform: "none",

                py: 1,
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
            >
              <EditIcon sx={{ color: "#666", mr: 1.5, fontSize: "20px" }} />
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 400,
                  fontFamily: "Inter",
                  fontSize: "14px",
                  color: "#303030",
                }}
              >
                Редактировать
              </Typography>
            </Button>
          </Box>

          <List sx={{ py: 0 }}>
            <Button
              onClick={handleLogout}
              sx={{
                borderRadius: "6px",
                background: "#303030",
                textTransform: "none",
                width: 173,
                height: 40,
                marginTop: "20px",
              }}
            >
              <ExitToAppIcon
                sx={{ color: "#fff", mr: 1.5, fontSize: "20px" }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "white",
                }}
              >
                Выйти
              </Typography>
            </Button>
          </List>
        </Box>
      </Popover>
    </div>
  );
};
