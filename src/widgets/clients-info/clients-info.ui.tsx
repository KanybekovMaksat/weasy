import { AddClient } from "~features/add-client";
import peopleEdit from "~shared/assets/staffImg/peopleEdit.png";
import { Typography } from "@mui/material";
import { Client } from "~entities/clients";
import { TabKey } from "~entities/tabs";

type Props = {
  activeTab: TabKey;
  clients: Client[];
  onAdd: (client: Client) => void;
};

export const ClientsInfo = ({ activeTab, clients, onAdd }: Props) => {
  const renderActionButton = () => {
    switch (activeTab) {
      case "current":
        return (
          <AddClient
            onAdd={onAdd}
            lastId={clients.length ? Math.max(...clients.map((c) => c.id)) : 0}
          />
        );
      case "new":
        return (
          <AddClient
            onAdd={onAdd}
            lastId={clients.length ? Math.max(...clients.map((c) => c.id)) : 0}
          />
        );
      case "without":
        return (
          <AddClient
            onAdd={onAdd}
            lastId={clients.length ? Math.max(...clients.map((c) => c.id)) : 0}
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
            alt="Клиенты"
          />
          <Typography
            variant="h2"
            className="font-[Inter] text-sm font-medium text-[#565A73]"
          >
            <span className="text-black font-semibold">{clients.length} </span>
            Клиентов
          </Typography>
        </div>

        {renderActionButton()}
      </div>
    </div>
  );
};
