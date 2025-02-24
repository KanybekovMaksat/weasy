import { useState } from "react";
import { Client, clientsMock } from "~entities/clients";

export const useClients = () => {
  const [clients, setClients] = useState<Client[]>(clientsMock);

  const addClient = (client: Client) => {
    setClients((prev) => [...prev, client]);
  };

  const editClient = (updatedClient: Client) => {
    setClients((prev) =>
      prev.map((c) => (c.id === updatedClient.id ? updatedClient : c))
    );
  };

  return { clients, addClient, editClient };
};