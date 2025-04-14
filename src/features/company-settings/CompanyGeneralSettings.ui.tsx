import { Box, Typography, TextField, Button } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { GeneralInfoSection } from "./GeneralInfoSection.ui";
import { LogoUploadSection } from "./LogoUploadSection.ui";
import { ContactsSection } from "./ContactsSection.ui";
import { Reveal } from "~shared/lib/framer";
import { useLocalStorage } from "./hooks/useLocalStorage";

export const CompanyGeneralSettings = () => {
  const [companyName, setCompanyName] = useLocalStorage(
    "companyName",
    "Bishkek medical"
  );
  const [industry, setIndustry] = useLocalStorage("industry", "Медицина");
  return (
    <Reveal from="right" delay={0.3}>
      <Box className="p-6 bg-white rounded-lg pt-[55px] font-[Rubik]">
        <Typography
          variant="h5"
          className="font-medium mb-6 text-[22px] text-btnback font-[Rubik]"
        >
          Общая информация
        </Typography>

        <GeneralInfoSection />

        <LogoUploadSection />

        <ContactsSection />
      </Box>
    </Reveal>
  );
};
