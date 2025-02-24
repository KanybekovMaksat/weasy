// features/edit-schedule/ui.tsx
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Doctor, WorkDay } from "~entities/doctor-schedule";

type Props = {
  open: boolean;
  doctor: Doctor;
  onClose: () => void;
  onSave: (updatedDoctor: Doctor) => void;
};

export const EditScheduleModal = ({ open, doctor, onClose, onSave }: Props) => {
  const [editedDoctor, setEditedDoctor] = useState(doctor);

  const handleDayChange = (index: number, field: keyof WorkDay, value: any) => {
    const updatedSchedule = editedDoctor.schedule.map((day, i) =>
      i === index ? { ...day, [field]: value } : day
    );
    setEditedDoctor({ ...editedDoctor, schedule: updatedSchedule });
  };

  const handleSave = () => {
    onSave(editedDoctor);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Редактировать график для: '{doctor.name}'</DialogTitle>
      <DialogContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          {editedDoctor.schedule.map((day, index) => (
            <div key={day.day} className="border p-4 rounded-lg">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={day.isWeekend}
                    onChange={(e) =>
                      handleDayChange(index, "isWeekend", e.target.checked)
                    }
                    sx={{
                      color: "#303030",
                      "&.Mui-checked": {
                        color: "#303030",
                      },
                    }}
                  />
                }
                label="Выходной"
              />

              {!day.isWeekend && (
                <TextField
                  label="Часы работы"
                  value={day.hours?.join(", ") || ""}
                  onChange={(e) =>
                    handleDayChange(index, "hours", e.target.value.split(", "))
                  }
                  fullWidth
                  margin="normal"
                  placeholder="09:00 - 12:00, 13:00 - 18:00"
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
              )}
              <div className="text-sm text-gray-500">{day.day}</div>
            </div>
          ))}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ color: "#303030" }}>
          Отмена
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          color="primary"
          sx={{ background: "#303030" }}
        >
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
