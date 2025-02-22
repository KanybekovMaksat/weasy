// pages/specialist/index.tsx
import React from "react";
import { SpecialistsTabs } from "~features/specialists-tabs";
import { useSpecialists } from "~features/specialists";

export const SpecialistPage: React.FC = () => {
  const { specialists, addSpecialist, editSpecialist } = useSpecialists();

  return (
    <div className="pb-[308px]">
      <SpecialistsTabs 
        specialists={specialists} 
        onAdd={addSpecialist}
        onEdit={editSpecialist}
      />
    </div>
  );
};