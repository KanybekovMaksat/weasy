import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Specialist } from "~entities/staff";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

type Props = {
  onAdd: (specialist: Specialist) => void;
  lastId: number;
};

export const AddStaff = ({ onAdd, lastId }: Props) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [specialty, setSpecialty] = useState("");

  const handleSubmit = () => {
    if (!name || !phone || !specialty) return;
    onAdd({
      id: lastId + 1,
      name,
      phone,
      specialty,
      avatar: "/images/doctor.jpg",
    });
    setOpen(false);
    setName("");
    setPhone("");
    setSpecialty("");
  };

  return (
    <>
      <Button
        variant="contained"
        startIcon={<PersonAddAltIcon />}
        onClick={() => setOpen(true)}
        className="font-[Inter] font-semibold text-xs text-white bg-btnback normal-case py-[10px] px-[16px]"
      >
        Добавить сотрудника
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        sx={{ width: 700, height: "600px", margin: "auto" }}
      >
        <DialogTitle>Добавить нового сотрудника</DialogTitle>
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
          <TextField
            label="Телефон"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            label="Специальность"
            fullWidth
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
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
