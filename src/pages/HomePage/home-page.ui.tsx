import React from "react";
import { HeroSection } from "~widgets/herosection";
import { CardList } from "~widgets/cardinfo";
import { PricingWidget } from "~widgets/cardprice";
import { ReviewWidget } from "~widgets/cardreview";
import { ConsultationBlock } from "~entities/сonsultationblock";
import { AccordionWidget } from "~widgets/accordion";
export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <CardList />
      <PricingWidget />
      <ReviewWidget />
      <ConsultationBlock />
      <AccordionWidget />
    </div>
  );
};
