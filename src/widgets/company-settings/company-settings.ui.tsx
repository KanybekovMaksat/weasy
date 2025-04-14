import { Typography } from "@mui/material";
import mabook from "~shared/assets/auth/MacBook Pro 16.png";
import { CompanyInformationForm } from "~features/company-information";
export const CompanySettings = () => {
  return (
    <div className="min-h-screen flex overflow-hidden w-[99vw] pt-[130px] ">
      <div className="bg-[#4C6980] flex-1 flex flex-col items-center justify-center pt-[50px] ">
        <div className="flex flex-col items-center pb-10">
          <div className="w-[110px] h-[110px] bg-black"></div>
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

      <div className="flex-1 flex items-center justify-center pt-[150px] pb-[50px] bg-[#F5F5F5]">
        <CompanyInformationForm />
      </div>
    </div>
  );
};
