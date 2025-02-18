import React from "react";
import { BusinessCategory } from "~entities/business-category";
import { Card, CardContent, Typography } from "@mui/material";
import check from "~shared/assets/industryDetailImg/chek.png";
type Props = {
  category: BusinessCategory;
  selected?: boolean;
  onClick: () => void;
};
export const CategoryCard: React.FC = ({
  category,
  selected,
  onClick,
}: Props) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        width: 190,
        height: 77,
        cursor: "pointer",
        border: selected ? "2px solid #4CAF50" : "1px solid #e0e0e0",
        transition: "all 0.2s",
        "&:hover": { boxShadow: 2 },
        position: "relative",
        overflow: "visible",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "6px",
      }}
      className="text-center "
    >
      <div className=" m-auto  ">
        <Typography
          variant="h6"
          className="font-semibold text-sm text-btnback "
        >
          {category.title}
        </Typography>
      </div>
      {selected && (
        <img src={check} alt="" className="absolute top-[-8px] right-[-10px]" />
      )}
    </Card>
  );
};
