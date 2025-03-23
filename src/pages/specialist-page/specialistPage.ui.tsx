// pages/specialist/index.tsx
import React from "react";
import { SpecialistsTabs } from "~features/specialists-tabs";
import { useSpecialists } from "~features/specialists";
import ScrollTop from "~shared/lib/react-router/scroll-top";
import { HeaderUser } from "~widgets/header-user";
export const SpecialistPage: React.FC = () => {
  const { specialists, addSpecialist, editSpecialist } = useSpecialists();

  return (
    <div className="pb-[308px]">
      <ScrollTop />
      <HeaderUser/>
      <SpecialistsTabs
        specialists={specialists}
        onAdd={addSpecialist}
        onEdit={editSpecialist}
      />
    </div>
  );
};
