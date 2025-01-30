import { CardInfo, CardsData } from "~entities/cardinfo";
import { Box, Typography } from "@mui/material";
import { Reveal } from "~shared/lib/framer";
export const CardList: React.FC = () => {
  return (
    <Box className="mb-[90px]">
      <div className="container">
        <Reveal from="bottom" delay={0.3}>
          <Box sx={{ margin: "0 auto" }} className="text-center max-w-[648px] ">
            <Typography
              variant="h3"
              className="text-[32px] font-semibold text-btnback  "
            >
              Идеальное решение для создания персонального лендинга
            </Typography>
            <Typography
              variant="body2"
              className="font-normal text-lg text-btnback mt-[15px] mb-[40px] leading-[28.8px] "
            >
              С нашей платформой вы легко создадите стильный лендинг с
              продуманным модулем записи, удобным календарем и гибкими
              настройками. Все для упрощения работы специалистов и удобства
              ваших клиентов.
            </Typography>
          </Box>
        </Reveal>
        <Reveal from="left" delay={0.3}>
          <Box
            className="flex  justify-between"
            gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            gap={2}
          >
            {CardsData.map((card, index) => (
              <CardInfo key={index} {...card} />
            ))}
          </Box>
        </Reveal>
      </div>
    </Box>
  );
};
