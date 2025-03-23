import { TextField, Typography } from "@mui/material";

export const ContactsSection = () => {
  return (
    <div className="space-y-4 bg-[#F0F1F3] py-[20px] pl-[20px] pr-[49px] rounded-lg">
      <Typography variant="h6" className="font-medium pb-[30px]">
        Контакты
      </Typography>

      <ContactField label="Телефон" value="+996 555 555 555" />
      <ContactField label="Whats app" value="+996 555 555 555" />
      <ContactField label="Telegram" value="+996 555 555 555" />
    </div>
  );
};

const ContactField = ({ label, value }: { label: string; value: string }) => (
  <TextField
    fullWidth
    label={label}
    value={value}
    variant="outlined"
    className="mb-2"
    InputProps={{
      className: "bg-white rounded-lg",
    }}
  />
);
