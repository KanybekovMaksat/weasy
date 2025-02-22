// features/specialists/model.ts
import { useState } from "react";
import { Specialist } from "~entities/staff";
import { specialistsMock } from "~entities/staff";

export const useSpecialists = () => {
  const [specialists, setSpecialists] = useState<Specialist[]>(specialistsMock);

  const addSpecialist = (newSpecialist: Specialist) => {
    setSpecialists(prev => [...prev, newSpecialist]);
  };

  const editSpecialist = (updatedSpecialist: Specialist) => {
    setSpecialists(prev => 
      prev.map(s => s.id === updatedSpecialist.id ? updatedSpecialist : s)
    );
  };

  return { specialists, addSpecialist, editSpecialist };
};