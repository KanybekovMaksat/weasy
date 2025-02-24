// widgets/staff-info/ui.tsx
import { AddStaff } from "~features/add-staff";
import peopleEdit from "~shared/assets/staffImg/peopleEdit.png";
import { Typography } from "@mui/material";
import { Specialist } from "~entities/staff";
import { TabKey } from "~entities/tabs";
type Props = {
  activeTab: TabKey;
  specialists: Specialist[];
  onAdd: (specialist: Specialist) => void;
  onEditSchedule?: () => void;
};

export const StaffInfo = ({
  activeTab,
  specialists,
  onAdd,
}: Props) => {
  const renderActionButton = () => {
    switch (activeTab) {
      case "current":
        return (
          <AddStaff
            onAdd={onAdd}
            lastId={
              specialists.length ? Math.max(...specialists.map((s) => s.id)) : 0
            }
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="border-b mb-4 border-[#EBEBEB]">
      <div className="pl-[24px] flex justify-between items-center">
        <div className="flex items-center gap-[6px] py-[7px]">
          <img
            src={peopleEdit}
            className="p-[7px] bg-[#F0F1F3] rounded-lg"
            alt="Специалисты"
          />
          <Typography
            variant="h2"
            className="font-[Inter] text-sm font-medium text-[#565A73]"
          >
            <span className="text-black font-semibold">
              {specialists.length}{" "}
            </span>
            Специалистов
          </Typography>
        </div>

        {renderActionButton()}
      </div>
    </div>
  );
};
