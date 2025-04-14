import { useState, useEffect } from "react";
import {
  TextField,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { Edit } from "@mui/icons-material";

export const GeneralInfoSection = () => {
  const [companyName, setCompanyName] = useState("Bishkek medical");
  const [industry, setIndustry] = useState("Медицина");
  const [editField, setEditField] = useState<"name" | "industry">();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const savedCompanyName = localStorage.getItem("companyName");
    const savedIndustry = localStorage.getItem("industry");

    if (savedCompanyName) setCompanyName(savedCompanyName);
    if (savedIndustry) setIndustry(savedIndustry);
  }, []);

  const handleEditStart = (field: "name" | "industry", value: string) => {
    setEditField(field);
    setInputValue(value);
  };

  const handleSave = () => {
    if (editField === "name") {
      setCompanyName(inputValue);
      localStorage.setItem("companyName", inputValue);
    } else {
      setIndustry(inputValue);
      localStorage.setItem("industry", inputValue);
    }
    setEditField(undefined);
  };
  return (
    <div className="space-y-4 mb-8 font-[Rubik] bg-[#F0F1F3] py-[20px] px-[20px] rounded-lg">
      <TextField
        fullWidth
        label="Название компании"
        value={companyName}
        variant="outlined"
        className="mb-4 bg-white font-[Rubik] font-normal text-lg"
        InputProps={{
          endAdornment: (
            <IconButton onClick={() => handleEditStart("name", companyName)}>
              <Edit fontSize="small" className="text-gray-500" />
            </IconButton>
          ),
        }}
        inputProps={{
          readOnly: true,
        }}
      />

      <TextField
        fullWidth
        label="Индустрия"
        value={industry}
        variant="outlined"
        className="bg-white font-[Rubik] font-normal text-lg"
        InputProps={{
          endAdornment: (
            <IconButton onClick={() => handleEditStart("industry", industry)}>
              <Edit fontSize="small" className="text-gray-500" />
            </IconButton>
          ),
        }}
        inputProps={{
          readOnly: true,
        }}
      />

      <Dialog open={!!editField} onClose={() => setEditField(undefined)}>
        <DialogTitle>
          Редактирование{" "}
          {editField === "name" ? "названия компании" : "индустрии"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mt-4"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditField(undefined)}>Отмена</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
