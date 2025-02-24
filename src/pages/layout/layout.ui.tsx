import { ThemeProvider } from "@mui/material/styles";

import { Outlet } from "react-router-dom";
import { Sidebar } from "~widgets/sidebar";
import { HeaderUser } from "~widgets/header-user";
import { interTheme } from "~app/provider";

export function GenericLayout() {
  return (
    <ThemeProvider theme={interTheme}>
      <div className="container min-h-screen flex  ">
        <Sidebar />

        <div className="flex-1 flex flex-col  ">
          <HeaderUser />
          <main className="flex-1  ">
            <div className="border-t border-[#ebebeb]">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export function IntroLayout() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
}
