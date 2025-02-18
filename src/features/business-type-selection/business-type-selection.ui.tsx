// features/business-type-selection/ui.tsx
import { useState } from "react";
import { Grid, Button, Typography, Container } from "@mui/material";
import { CategoryCard } from "~widgets/category-card";
import { businessCategories } from "~entities/business-category";
import { useNavigate } from "react-router-dom";
import { Reveal } from "~shared/lib/framer";
export const BusinessTypeSelection = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleSelect = (id: number) => setSelectedId(id);
  const handleNext = () => navigate("/next-step");

  return (
    <>
      <div className="container">
        <Reveal from="top" delay={0.3}>
          <Typography
            variant="h4"
            className="font-semibold text-[28px] text-btnback  pb-[40px] text-center"
          >
            Выберите тип вашего бизнеса
          </Typography>
        </Reveal>
        <Reveal from="bottom" delay={0.3}>
          <div className="flex items-center gap-[20px] flex-wrap">
            {businessCategories.map((category) => (
              <div key={category.id}>
                <CategoryCard
                  category={category}
                  selected={category.id === selectedId}
                  onClick={() => handleSelect(category.id)}
                />
              </div>
            ))}
          </div>
        </Reveal>

        <div className="flex justify-end mt-[20px] mb-[174px]">
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={!selectedId}
            className="py-[15px] px-[68px] normal-case bg-btnback font-semibold text-base "
          >
            Далее
          </Button>
        </div>
      </div>
    </>
  );
};
