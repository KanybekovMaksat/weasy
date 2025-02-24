import { useForm, Controller } from "react-hook-form";
import { TextField, Typography, Divider, Box, Button } from "@mui/material";
import { pathKeys } from "~shared/lib/react-router";
import { useNavigate } from "react-router-dom";
type FormData = {
  companyName: string;
  siteUrl: string;
  companyAddress: string;
};

export const CompanySettingsForm = () => {
  const {
    control,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  const navigate = useNavigate();

  return (
    <div className="max-w-[610px]  mx-auto p-6 text-btnback ">
      <Typography variant="h4" className="mb-[30px] text-[28px] font-semibold">
        Настройте свой сайт и профиль компании
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <Box className="bg-white rounded-[10px] shadow-md py-[20px] pl-[30px]">
          <Typography variant="h5" className=" text-[22px] font-semibold">
            Как называется ваша компания?
          </Typography>

          <Controller
            name="companyName"
            control={control}
            rules={{ required: "Обязательное поле" }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Введите название*"
                error={!!errors.companyName}
                helperText={errors.companyName?.message}
                className="mt-[15px] mb-[10px]"
                sx={{
                  width: "388px",
                  height: "50px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    "& fieldset": { borderColor: "#434447" },
                    "&:hover fieldset": { borderColor: "#434447" },
                    "&.Mui-focused fieldset": { borderColor: "#434447" },
                  },
                  "& .MuiFormLabel-root.Mui-focused": { color: "#434447" },
                }}
              />
            )}
          />
          <Typography className="font-[Roboto] font-normal text-sm">
            Это название, которое увидят ваши клиенты.
          </Typography>
        </Box>

        <Box className="bg-white rounded-[10px] shadow-md py-[20px] px-[30px]">
          <Typography variant="h5" className="text-[22px] font-semibold ">
            Задайте URL-адрес вашего сайта
          </Typography>

          <Typography className="font-[Roboto] font-normal text-ms  pt-[10px] pb-[20px]">
            Ваш новый сайт будет готов сразу после регистрации.
          </Typography>

          <div className="flex items-center gap-2 h-[63px] pt-[5px] pb-[10px] pl-[5px] pr-[14px] bg-[#F3F3F3] rounded-[10px]">
            <Controller
              name="siteUrl"
              control={control}
              rules={{ required: "Обязательное поле" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Введите URL сайта*"
                  error={!!errors.siteUrl}
                  helperText={errors.siteUrl?.message}
                  className="flex-1"
                  sx={{
                    width: "384px",
                    height: "50px",
                    "& .MuiOutlinedInput-root": {
                      background: "#fff",
                      color: "#434447",
                      borderRadius: "10px",
                      border: "none",
                      "& fieldset": { border: "none" },
                      "&:hover fieldset": { border: "none" },
                      "&.Mui-focused fieldset": { border: "none" },
                    },
                    "& .MuiFormLabel-root.Mui-focused": { color: "#434447" },
                    "& .MuiInputLabel-root": {
                      transition: "opacity 0.2s",
                    },
                    "& .MuiInputLabel-root:not(.MuiInputLabel-shrink)": {
                      opacity: 1, // Показать label
                    },
                    "& .MuiInputLabel-shrink": {
                      opacity: 0, // Скрыть label при вводе
                    },
                  }}
                />
              )}
            />
            <span className="font-semibold text-lg">.weasy.com</span>
          </div>

          <Typography className="text-sm font-[Roboto] pt-[10px] ">
            Введите уникальное имя для вашего сайта. Это станет вашим личным
            URL-адресом, например: mysite.weasy.com.
          </Typography>
        </Box>

        <Box className="bg-white rounded-[10px] shadow-md pt-[20px] pb-[25px] px-[30px] ">
          <Typography variant="h5" className="mb-4 text-[22px] font-semibold">
            Адрес компании
          </Typography>

          <Controller
            name="companyAddress"
            control={control}
            rules={{ required: "Обязательное поле" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Введите название *"
                error={!!errors.companyAddress}
                helperText={errors.companyAddress?.message}
                sx={{
                  width: "500px",
                  height: "50px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    "& fieldset": { borderColor: "#434447" },
                    "&:hover fieldset": { borderColor: "#434447" },
                    "&.Mui-focused fieldset": { borderColor: "#434447" },
                  },
                  "& .MuiFormLabel-root.Mui-focused": { color: "#434447" },
                }}
              />
            )}
          />
        </Box>

        <Box className="mt-8">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="rounded-[10px] h-[54px]  normal-case"
            sx={{ background: "#303030" }}
            disabled={
              !watch("companyName") ||
              !watch("siteUrl") ||
              !watch("companyAddress")
            }
            onClick={() => navigate(pathKeys.industries.root())}
          >
            Далее
          </Button>
        </Box>
      </form>
    </div>
  );
};
