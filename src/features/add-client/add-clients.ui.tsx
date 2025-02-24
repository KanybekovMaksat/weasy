import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Client } from "~entities/clients";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { MuiTelInput } from "mui-tel-input";

type Props = {
  onAdd: (client: Client) => void;
  lastId: number;
};

export const AddClient = ({ onAdd, lastId }: Props) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [visited, setVisited] = useState(0);
  const [paid, setPaid] = useState("0 сом");

  const handleSubmit = () => {
    if (!name || !phone) return;
    onAdd({
      id: lastId + 1,
      name,
      phone,
      visited,
      paid,
      avatar: "/images/doctor.jpg",
    });
    setOpen(false);
    setName("");
    setPhone("");
    setVisited(0);
    setPaid("0 сом");
  };

  return (
    <>
      <Button
        variant="contained"
        startIcon={<PersonAddAltIcon />}
        onClick={() => setOpen(true)}
        className="font-[Inter] font-semibold text-xs text-white bg-btnback normal-case py-[10px] px-[16px]"
      >
        Добавить клиента
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        sx={{ width: 700, height: "600px", margin: "auto" }}
      >
        <DialogTitle>Добавить нового клиента</DialogTitle>
        <DialogContent className="space-y-5">
          <TextField
            label="ФИО"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          <MuiTelInput
            label="Телефон"
            fullWidth
            value={phone}
            defaultCountry="KG"
            onChange={(value) => setPhone(value)} // Исправлено здесь
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
            label="Визитов"
            fullWidth
            type="number"
            value={visited}
            onChange={(e) => setVisited(Number(e.target.value))}
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
            value={paid}
            onChange={(e) => setPaid(e.target.value)}
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
          <Button onClick={() => setOpen(false)} sx={{ color: "#303030" }}>
            Отмена
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ background: "#303030" }}
          >
            Добавить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};