import { Outlet } from "react-router-dom";
import { Header } from "~shared/ui/header";
export function IndustriesLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-mainback">
        <Outlet />
      </main>
    </div>
  );
}

export function IntroIndusrtiesLayout() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
}
