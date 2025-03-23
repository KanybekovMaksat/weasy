import { TextField } from "@mui/material";

export const GeneralInfoSection = () => {
  return (
    <div className="space-y-4 mb-8 font-[Rubik] bg-[#F0F1F3] py-[20px] px-[20px] rounded-lg">
      <TextField
        fullWidth
        label="Название компании"
        defaultValue="Bishkek medical"
        variant="outlined"
        className="mb-4 bg-white font-[Rubik] font-normal text-lg "
      />

      <TextField
        fullWidth
        label="Индустрия"
        defaultValue="Медицина"
        variant="outlined"
        className="bg-white font-[Rubik] font-normal text-lg "
      />
    </div>
  );
};
