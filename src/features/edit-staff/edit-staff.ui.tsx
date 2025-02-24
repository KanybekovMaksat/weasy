import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";


export const EditStaff = ({ specialist, onSave, onCancel }) => {
  const [name, setName] = useState(specialist.name);
  const [phone, setPhone] = useState(specialist.phone);
  const [specialty, setSpecialty] = useState(specialist.specialty);

  const handleSubmit = () => {
    onSave({ ...specialist, name, phone, specialty });
  };

  return (
    <Dialog open={true} onClose={onCancel}>
      <DialogTitle>Редактировать сотрудника</DialogTitle>
      <DialogContent className="space-y-3">
        <TextField
          label="ФИО"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Телефон"
          fullWidth
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          label="Специальность"
          fullWidth
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Отмена</Button>
        <Button onClick={handleSubmit} variant="contained">
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
