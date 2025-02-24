// src/features/auth/registration-form/ui/registration-form.tsx
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Typography, Link, Box } from "@mui/material";
import { pathKeys } from "~shared/lib/react-router";
import { useNavigate } from "react-router-dom";

import Person from "~shared/assets/auth/person.png";
type FormData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const {
    control,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>();

  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className=" mx-auto  text-btnback">
      <div className=" bg-white py-[54px] pl-[24px] pr-[32px] rounded-[15px] shadow-md">
        <div className="w-[384px]">
          <Typography
            variant="h5"
            className="text-[26px] pb-[35px] font-semibold text-center"
          >
            Вход в аккаунт
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <Controller
              name="email"
              control={control}
              rules={{ required: "Обязательное поле" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email *"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  sx={{
                    width: "384px",
                    height: "50px",

                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      "& fieldset": {
                        borderColor: "#303030",
                      },
                      "&:hover fieldset": {
                        borderColor: "#303030",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#303030",
                      },
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#303030",
                    },
                  }}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{ required: "Обязательное поле" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  type="password "
                  label="Пароль *"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  sx={{
                    margin: "16px 0",
                    width: "384px",
                    height: "50px",

                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      "& fieldset": {
                        borderColor: "#303030",
                      },
                      "&:hover fieldset": {
                        borderColor: "#303030",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#303030",
                      },
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#303030",
                    },
                  }}
                />
              )}
            />

            <Typography className="pt-[10px]">
              Не помните пароль?
              <Link
                onClick={() => navigate(pathKeys.registration())}
                className="text-blue-600 pl-[5px]"
              >
                Сбросьте его здесь
              </Link>
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="rounded-[10px] h-[54px] mt-[20px] normal-case"
              sx={{ background: "#303030" }}
              onClick={() => navigate(pathKeys.specialists())}
            >
              Войти в систему
            </Button>
          </form>
        </div>
      </div>
      <Box className="mt-4 text-center bg-white rounded-lg shadow-md pt-[20px] pb-[24px] pl-[24px] ">
        <div className="max-w-[309px]">
          <div className="flex  items-center gap-x-[15px]">
            <img src={Person} alt="" />
            <Typography className="text-btnback text-left font-semibold text-[22px] leading-[28.6px]">
              У вас нет <br /> аккаунта?
            </Typography>
          </div>

          <div className="flex pt-[10px] text-left ">
            <Typography>
              Вы можете зарегистрироваться нажав на
              <Link
                onClick={() => navigate(pathKeys.registration())}
                className="text-blue-600 px-[5px]"
              >
                регистрация
              </Link>
            </Typography>
          </div>
        </div>
      </Box>
    </div>
  );
};
