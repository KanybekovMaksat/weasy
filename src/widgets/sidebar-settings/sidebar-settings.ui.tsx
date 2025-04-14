import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Reveal } from "~shared/lib/framer";

interface SidebarSettingsProps {
  selectedSection: string;
  onSectionSelect: (section: string) => void;
}

export const SidebarSettings: React.FC<SidebarSettingsProps> = ({
  selectedSection,
  onSectionSelect,
}) => {
  const [openCatalog, setOpenCatalog] = React.useState(true);
  const [openCompany, setOpenCompany] = React.useState(false);
  const [openWebsite, setOpenWebsite] = React.useState(false);

  const renderMenuItem = (
    sectionKey: string,
    text: string,
    indent: number = 0
  ) => (
    <ListItem
      button
      className={`pl-${indent * 4}`}
      onClick={() => onSectionSelect(sectionKey)}
    >
      <div className="flex items-center">
        {selectedSection === sectionKey && (
          <div className="w-2 h-2 rounded-full bg-black mr-2"></div>
        )}
        <ListItemText className="font-medium text-sm" primary={text} />
      </div>
    </ListItem>
  );

  return (
    <div className="w-[220px]">
      <Typography
        variant="h3"
        className="font-bold text-[22px] font-[Nunito] pt-[40px] pb-[10px]"
      >
        Настройки
      </Typography>

      <Reveal from="top" delay={0.3}>
        <List className="border-[#EBEBEB] border-r text-[#44505c]">
          <ListItem button onClick={() => setOpenCatalog(!openCatalog)}>
            <ListItemText className="font-medium text-base" primary="Каталог" />
            {openCatalog ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openCatalog} timeout="auto" unmountOnExit>
            <List component="p" disablePadding>
              {renderMenuItem("locations", "Локации", 2)}
              {renderMenuItem("services", "Услуги", 2)}
            </List>
          </Collapse>

          <ListItem button onClick={() => setOpenCompany(!openCompany)}>
            <ListItemText
              className="font-medium text-base"
              primary="Компания"
            />
            {openCompany ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openCompany} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {renderMenuItem("company-general", "Общее", 2)}
              {renderMenuItem("schedule", "График работы", 2)}
            </List>
          </Collapse>

          <ListItem
            button
            onClick={() => {
              setOpenWebsite(!openWebsite);
              onSectionSelect("website");
            }}
          >
            <ListItemText
              className="font-medium text-base"
              primary="Веб-сайт"
            />
            {openWebsite ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
        </List>
      </Reveal>
    </div>
  );
};
