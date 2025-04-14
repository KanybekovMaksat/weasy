import React, { useState } from "react";
import { Tabs } from "~widgets/tabs";
import { TabKey } from "~entities/tabs";
import { ClientsList } from "~widgets/clients-list";
import { Client } from "~entities/clients";
import { ClientsInfo } from "~widgets/clients-info";
import { HeaderUser } from "~widgets/header-user";
const tabs = [
  { key: "current", label: "Все" },
  { key: "new", label: "Новые" },
  { key: "without", label: "Без записи" },
] as const;

interface ClientsTabsProps {
  clients: Client[];
  onAdd: (client: Client) => void;
  onEdit: (client: Client) => void;
}

export const ClientsTabs: React.FC<ClientsTabsProps> = ({
  clients,
  onAdd,
  onEdit,
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>("current");

  return (
    <div className="flex flex-col">
      <HeaderUser />
      <div className="border-t border-l border-[#EBEBEB]">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <ClientsInfo activeTab={activeTab} clients={clients} onAdd={onAdd} />

        <div className="flex-grow">
          {activeTab === "current" && (
            <ClientsList clients={clients} onEdit={onEdit} />
          )}
          {activeTab === "new" && (
            <ClientsList clients={clients} onEdit={onEdit} />
          )}
          {activeTab === "without" && (
            <ClientsList clients={clients} onEdit={onEdit} />
          )}
        </div>
      </div>
    </div>
  );
};
