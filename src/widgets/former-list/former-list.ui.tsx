import React, { useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import { Edit2 } from "lucide-react";
import { Specialist } from "~entities/staff";
import { StaffListProps } from "~widgets/staff-list";

export const FormerList: React.FC<StaffListProps> = ({ specialists }) => {
  const [selectedSpecialist, setSelectedSpecialist] =
    useState<Specialist | null>(null);

  return (
    <div className="pl-6 bg-white rounded-lg">
      <div className="space-y-4">
        {specialists.map((specialist) => (
          <Card
            key={specialist.id}
            className="flex items-center border border-[#EBEBEB] rounded-[10px] px-[15px] py-[25px]"
          >
            <div className="flex items-center">
              <div className="flex items-center gap-x-[20px] w-[188px]">
                <img
                  src={specialist.avatar}
                  alt={specialist.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <Typography
                  variant="h3"
                  className="font-medium text-base text-btnback"
                >
                  {specialist.name}
                </Typography>
              </div>
              <div className="font-normal flex items-center gap-x-[80px] pl-[100px]">
                <div>
                  <Typography
                    variant="subtitle1"
                    className="text-sm text-[#91929E]"
                  >
                    Контактные данные
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className="font-normal text-base text-[#0A1629] pt-[10px]"
                  >
                    {specialist.phone}
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="subtitle1"
                    className="text-sm text-[#91929E]"
                  >
                    Специальность
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className="font-normal text-base text-[#0A1629] pt-[10px]"
                  >
                    {specialist.specialty}
                  </Typography>
                </div>
              </div>
            </div>
            <Typography
              variant="subtitle1"
              className="font-semibold text-xs text-[#FF4931] ml-auto"
            >
              Удален
            </Typography>
          </Card>
        ))}
      </div>
    </div>
  );
};
