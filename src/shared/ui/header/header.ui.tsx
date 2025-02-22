import { AppBar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

import { pathKeys } from "~shared/lib/react-router";

export const Header: React.FC = () => {
  return (
    <AppBar position="static" className="bg-white shadow-none font-medium ">
      <div className="container">
        <Box className="flex justify-between pt-[20px] pb-[20px] pl-[0]">
          <Link to={pathKeys.home()} className="flex items-center gap-2">
            <Box className="w-[60px] h-[60px] bg-black"></Box>

            <Typography className="font-semibold text-2xl text-black">
              Weasy
            </Typography>
          </Link>
        </Box>
      </div>
    </AppBar>
  );
};
