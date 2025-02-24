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
import { Edit2 } from "lucide-react";
import { Specialist } from "~entities/staff";

export interface StaffListProps {
  specialists: Specialist[];
  onEdit: (updatedSpecialist: Specialist) => void;
}

export const StaffList: React.FC<StaffListProps> = ({
  specialists,
  onEdit,
}) => {
  const [selectedSpecialist, setSelectedSpecialist] =
    useState<Specialist | null>(null);

  const handleEdit = (specialist: Specialist) => {
    setSelectedSpecialist(specialist);
  };

  const handleSave = () => {
    if (selectedSpecialist) {
      onEdit(selectedSpecialist);
      setSelectedSpecialist(null);
    }
  };

  return (
    <div className="pl-6 bg-white rounded-lg">
      <div className="space-y-4">
        {specialists.map((specialist) => (
          <Card
            key={specialist.id}
            className="flex items-center border border-[#EBEBEB] rounded-[10px] px-[15px] py-[25px]"
          >
            <div className="flex items-center">
              <div className="flex items-center gap-x-[20px] w-[188px]">
                <img
                  src={specialist.avatar}
                  alt={specialist.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <Typography
                  variant="h3"
                  className="font-medium text-base text-btnback"
                >
                  {specialist.name}
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
                    {specialist.phone}
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="subtitle1"
                    className="text-sm text-[#91929E]"
                  >
                    Специальность
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className="font-normal text-base text-[#0A1629] pt-[10px]"
                  >
                    {specialist.specialty}
                  </Typography>
                </div>
              </div>
            </div>
            <Button
              variant="contained"
              className="ml-auto bg-[#F0F1F3] rounded font-semibold text-xs text-btnback normal-case w-[155px] h-[40px] hover:bg-[#303030] hover:text-white"
              onClick={() => handleEdit(specialist)}
            >
              <Edit2 className="w-4 h-4 mr-2" /> Редактировать
            </Button>
          </Card>
        ))}
      </div>

      {selectedSpecialist && (
        <Dialog open={true} onClose={() => setSelectedSpecialist(null)}>
          <DialogTitle>Редактировать сотрудника</DialogTitle>
          <DialogContent className="space-y-3">
            <TextField
              label="ФИО"
              fullWidth
              value={selectedSpecialist.name}
              onChange={(e) =>
                setSelectedSpecialist({
                  ...selectedSpecialist,
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
              value={selectedSpecialist.phone}
              onChange={(e) =>
                setSelectedSpecialist({
                  ...selectedSpecialist,
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
              label="Специальность"
              fullWidth
              value={selectedSpecialist.specialty}
              onChange={(e) =>
                setSelectedSpecialist({
                  ...selectedSpecialist,
                  specialty: e.target.value,
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
              onClick={() => setSelectedSpecialist(null)}
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
