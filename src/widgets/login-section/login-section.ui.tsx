import { Typography } from "@mui/material";
import mabook from "~shared/assets/auth/MacBook Pro 16.png";
import { LoginForm } from "~features/auth/login";
import logo from '~shared/assets/logo/logo.svg'

export const LoginSection = () => {
  return (
    <div className="min-h-screen flex overflow-hidden w-[99vw] ">
      <div className="bg-[#4C6980] flex-1 flex flex-col items-center justify-center pt-[50px] ">
        <div className="flex flex-col items-center pb-10">
          <img src={logo} alt="" />
          <Typography
            variant="h4"
            className="font-bold text-[34px] text-white pt-[15px]"
          >
            W-easy
          </Typography>
        </div>
        <img
          src={mabook}
          alt="MacBook Preview"
          className="w-4/5 max-h-[500px] object-contain"
        />
      </div>

      <div className="flex-1 flex items-center justify-center pt-[30px]  pb-[50px] bg-[#F5F5F5]">
        <LoginForm />
      </div>
    </div>
  );
};
