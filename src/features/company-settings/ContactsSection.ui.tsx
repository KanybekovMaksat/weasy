// ContactsSection.ui.tsx
import { TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export const ContactsSection = () => {
  const [contacts, setContacts] = useState({
    phone: "+996 555 555 555",
    whatsapp: "+996 555 555 555",
    telegram: "+996 555 555 555"
  });

  // Load contacts from localStorage on component mount
  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  const handleContactChange = (field: string, value: string) => {
    const updatedContacts = { ...contacts, [field]: value };
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <div className="space-y-4 bg-[#F0F1F3] py-[20px] pl-[20px] pr-[49px] rounded-lg">
      <Typography variant="h6" className="font-medium pb-[30px]">
        Контакты
      </Typography>

      <ContactField 
        label="Телефон" 
        value={contacts.phone} 
        onChange={(value) => handleContactChange('phone', value)} 
      />
      <ContactField 
        label="Whats app" 
        value={contacts.whatsapp} 
        onChange={(value) => handleContactChange('whatsapp', value)} 
      />
      <ContactField 
        label="Telegram" 
        value={contacts.telegram} 
        onChange={(value) => handleContactChange('telegram', value)} 
      />
    </div>
  );
};

const ContactField = ({ 
  label, 
  value, 
  onChange 
}: { 
  label: string; 
  value: string;
  onChange: (value: string) => void;
}) => (
  <TextField
    fullWidth
    label={label}
    value={value}
    variant="outlined"
    className="mb-2"
    onChange={(e) => onChange(e.target.value)}
    InputProps={{
      className: "bg-white rounded-lg",
    }}
  />
);