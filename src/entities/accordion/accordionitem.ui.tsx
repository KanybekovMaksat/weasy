import React, { useState } from "react";
import { Box, Typography, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export interface AccordionItemProps {
  quiz: string;
  title: string;
  content: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  quiz,
  title,
  content,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <div className="mb-[20px]">
      {/* Верхний блок */}
      <Box
        className="rounded-[10px] p-[26px] cursor-pointer bg-white transition-all duration-300 hover:bg-gray-50"
        onClick={handleToggle}
      >
        <Box className="flex items-center justify-between">
          <Typography
            variant="h3"
            className="font-semibold text-[24px] text-btnback"
          >
            {quiz}
          </Typography>
          <Box className="w-[50px] h-[50px] bg-btnback flex items-center rounded-[50%] justify-center">
            {expanded ? (
              <ExpandLessIcon sx={{ color: "white" }} />
            ) : (
              <ExpandMoreIcon sx={{ color: "white" }} />
            )}
          </Box>
        </Box>
      </Box>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box className="rounded-[10px] pt-[17px] pl-[26px] pb-[47px] pr-[26px] mt-[63px] bg-btnback text-white relative">
          <Box className="flex items-center justify-between">
            {" "}
            <Typography
              variant="h3"
              className="font-semibold text-[24px] leading-[33px]"
            >
              {title}
            </Typography>
            <IconButton
              onClick={handleClose}
              className="rounded-[50%] w-[50px] h-[50px] cursor-pointer bg-white transition-all duration-300 hover:bg-gray-50 "
            >
              <ExpandLessIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>

          <Typography
            variant="body2"
            className="font-normal text-[24px] leading-[33px] pt-[20px]"
          >
            {content}
          </Typography>
        </Box>
      </Collapse>
    </div>
  );
};
