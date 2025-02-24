import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Card,
  Typography,
} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Client } from "~entities/clients";

export interface ClientsListProps {
  clients: Client[];
  onEdit: (updatedClient: Client) => void;
}

export const ClientsList: React.FC<ClientsListProps> = ({
  clients,
  onEdit,
}) => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const handleEdit = (client: Client) => {
    setSelectedClient(client);
  };

  const handleSave = () => {
    if (selectedClient) {
      onEdit(selectedClient);
      setSelectedClient(null);
    }
  };

  return (
    <div className="pl-6 bg-white rounded-lg">
      <div className="space-y-4">
        {clients.map((client) => (
          <Card
            key={client.id}
            className="flex items-center border border-[#EBEBEB] rounded-[10px] px-[15px] py-[25px]"
          >
            <div className="flex items-center">
              <div className="flex items-center gap-x-[20px] w-[188px]">
                <img
                  src={client.avatar}
                  alt={client.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <Typography
                  variant="h3"
                  className="font-medium text-base text-btnback"
                >
                  {client.name}
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
                    {client.phone}
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="subtitle1"
                    className="text-sm text-[#91929E]"
                  >
                    Посещений
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className="font-normal text-base text-[#0A1629] pt-[10px] text-center"
                  >
                    {client.visited}
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="subtitle1"
                    className="text-sm text-[#91929E]"
                  >
                    Оплачено
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className="font-normal text-base text-[#0A1629] pt-[10px]"
                  >
                    {client.paid}
                  </Typography>
                </div>
              </div>
            </div>
            <Button
              variant="contained"
              className="ml-auto bg-[#F0F1F3] rounded min-w-0 font-semibold text-xs text-btnback normal-case w-[40px] h-[40px] hover:bg-[#303030] hover:text-white"
              onClick={() => handleEdit(client)}
            >
              <ArrowForwardIosOutlinedIcon className="w-[20px] h-[20px] " />
            </Button>
          </Card>
        ))}
      </div>

      {selectedClient && (
        <Dialog open={true} onClose={() => setSelectedClient(null)}>
          <DialogTitle>Редактировать клиента</DialogTitle>
          <DialogContent className="space-y-3">
            <TextField
              label="ФИО"
              fullWidth
              value={selectedClient.name}
              onChange={(e) =>
                setSelectedClient({
                  ...selectedClient,
                  name: e.target.value,
                })
              }
              sx={{
                margin: "10px 0",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#000",
                  },
                  "&:hover fieldset": {
                    borderColor: "#303030",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#303030",
                  },
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "#000",
                },
              }}
            />
            <TextField
              label="Телефон"
              fullWidth
              value={selectedClient.phone}
              onChange={(e) =>
                setSelectedClient({
                  ...selectedClient,
                  phone: e.target.value,
                })
              }
              sx={{
                margin: "10px 0",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#000",
                  },
                  "&:hover fieldset": {
                    borderColor: "#303030",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#303030",
                  },
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "#000",
                },
              }}
            />
            <TextField
              label="Посещений"
              fullWidth
              type="number"
              value={selectedClient.visited}
              onChange={(e) =>
                setSelectedClient({
                  ...selectedClient,
                  visited: +e.target.value,
                })
              }
              sx={{
                margin: "10px 0",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#000",
                  },
                  "&:hover fieldset": {
                    borderColor: "#303030",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#303030",
                  },
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "#000",
                },
              }}
            />
            <TextField
              label="Оплачено"
              fullWidth
              value={selectedClient.paid}
              onChange={(e) =>
                setSelectedClient({
                  ...selectedClient,
                  paid: e.target.value,
                })
              }
              sx={{
                margin: "10px 0",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#000",
                  },
                  "&:hover fieldset": {
                    borderColor: "#303030",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#303030",
                  },
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "#000",
                },
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setSelectedClient(null)}
              sx={{ color: "#303030" }}
            >
              Отмена
            </Button>
            <Button
              onClick={handleSave}
              variant="contained"
              sx={{ background: "#303030" }}
            >
              Сохранить
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};
