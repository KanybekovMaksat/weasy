// widgets/tabs/u i.tsx
import { Tab, TabKey } from "entities/tabs";
import { Button } from "@mui/material";
import clsx from "clsx";

type Props = {
  tabs: Tab[];
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
};

export const Tabs = ({ tabs, activeTab, onTabChange }: Props) => {
  return (
    <div className="border-b border-[#EBEBEB] -mt-[1px] ">
      <div className="flex gap-1 py-[4px] pl-[24px]">
        {" "}
        {tabs.map((tab) => (
          <Button
            key={tab.key}
            variant="text"
            onClick={() => onTabChange(tab.key)}
            className={clsx(
              "!normal-case !text-xs !font-medium !rounded-[4px] !p-[10px] bg-[#F0F1F3] !text-[#565A73] font-[Inter] ",
              "hover:bg-[#303030] hover:!text-white",
              {
                "!font-semibold !text-white !bg-btnback !border-transparent":
                  activeTab === tab.key,
              }
            )}
          >
            {tab.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
