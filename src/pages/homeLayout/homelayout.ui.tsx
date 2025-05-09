import { Outlet } from "react-router-dom";
import { Footer } from "~widgets/footer";
import { HomeHeader } from "~widgets/home-header";

export function HomeLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeHeader />
      <main className="bg-mainback">
        <Outlet />
      </main>
      <Footer />
    </div>  
  );
}

export function IntroHomeLayout() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
}
