import { Outlet } from "react-router-dom";
import { Footer } from "~widgets/footer";
import { Header } from "~widgets/header";
import { HeroSection } from "~widgets/herosection";
import { CardList } from "~widgets/cardinfo";
import { PricingWidget } from "~widgets/cardprice";
import { ReviewWidget } from "~widgets/cardreview";
import { ConsultationBlock } from "~entities/сonsultationblock";
import { AccordionWidget } from "~widgets/accordion";
export function GenericLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-mainback">
        <Outlet />
        <HeroSection />
        <CardList />
        <PricingWidget />
        <ReviewWidget />
        <AccordionWidget />

        <ConsultationBlock />
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
