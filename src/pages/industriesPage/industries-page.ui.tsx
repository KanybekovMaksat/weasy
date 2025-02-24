import React from "react";
import { IndustrySection } from "~widgets/IndustrySection";
import ScrollTop from "~shared/lib/react-router/scroll-top";
export const IndustriesPage: React.FC = () => {
  return (
    <div>
      <ScrollTop />
      <IndustrySection />
    </div>
  );
};
