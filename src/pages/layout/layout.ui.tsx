import { Outlet } from "react-router-dom";
import { Footer } from "~widgets/footer";
import { Header } from "~widgets/header";

export function GenericLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-mainback">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export function IntroLayout() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
}
