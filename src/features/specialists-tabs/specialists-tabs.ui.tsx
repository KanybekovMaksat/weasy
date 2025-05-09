// features/specialists-tabs/ui.tsx
import React, { useState } from "react";
import { Tabs } from "~widgets/tabs";
import { TabKey } from "~entities/tabs";
import { StaffList } from "~widgets/staff-list";
import { Specialist } from "~entities/staff";
import { StaffInfo } from "~widgets/staff-info";
import { FormerList } from "~widgets/former-list";
import { DoctorSchedule } from "~widgets/schedule-list";
import { HeaderUser } from "~widgets/header-user";
const tabs = [
  { key: "current", label: "Специалисты" },
  { key: "former", label: "Бывшие специалисты" },
  { key: "schedule", label: "График работы" },
] as const;

interface SpecialistsTabsProps {
  specialists: Specialist[];
  onAdd: (specialist: Specialist) => void;
  onEdit: (specialist: Specialist) => void;
  onEditSchedule?: () => void;
}

export const SpecialistsTabs: React.FC<SpecialistsTabsProps> = ({
  specialists,
  onAdd,
  onEdit,
  onEditSchedule,
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>("current");

  return (
    <div className="flex flex-col">
      <HeaderUser />
      <div className="border-t border-l  border-[#EBEBEB]">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <StaffInfo
          activeTab={activeTab}
          specialists={specialists}
          onAdd={onAdd}
          onEditSchedule={onEditSchedule}
        />

        <div className="flex-grow">
          {activeTab === "current" && (
            <StaffList specialists={specialists} onEdit={onEdit} />
          )}
          {activeTab === "former" && (
            <FormerList onEdit={onEdit} specialists={specialists} />
          )}
          {activeTab === "schedule" && <DoctorSchedule />}
        </div>
      </div>
    </div>
  );
};
