import React from "react";
import { ClientsTabs } from "~features/clients-tabs";
import { useClients } from "~features/useClients";
import ScrollTop from "~shared/lib/react-router/scroll-top";

export const CalendarPage: React.FC = () => {
  const { clients, addClient, editClient } = useClients();

  return (
    <div className="pb-[308px]">
      <ScrollTop />
      <ClientsTabs clients={clients} onAdd={addClient} onEdit={editClient} />
    </div>
  );
};
