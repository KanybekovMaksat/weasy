// src/features/auth/registration-form/ui/registration-form.tsx
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Link,
  Box,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { pathKeys } from "~shared/lib/react-router";
import { useNavigate } from "react-router-dom";

import Person from "~shared/assets/auth/person.png";
type FormData = {
  email: string;
  password: string;
  phone: string;
  lastName: string;
  firstName: string;
  agreeTerms: boolean;
};

export const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm<FormData>();

  const [phoneError, setPhoneError] = useState(false);

  const validatePhone = (value: string) => {
    const phoneRegex = /^\+\d{10,15}$/;
    return phoneRegex.test(value);
  };

  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log(data);
    navigate(pathKeys.settings());
  };
  return (
    <div className=" mx-auto  text-btnback">
      <Typography
        variant="h4"
        className="mb-[15px] text-center text-[28px] font-semibold"
      >
        Добро пожаловать!
      </Typography>

      <Typography
        variant="subtitle1"
        className="mb-[20px] text-center font-semibold text-[18px]"
      >
        Создайте аккаунт и начните работать
      </Typography>
      <div className=" bg-white py-[30px] pl-[24px] pr-[32px] rounded-lg shadow-md">
        <div className="   w-[384px]">
          <Typography
            variant="h5"
            className="text-[26px] pb-[35px] font-semibold text-center"
          >
            Регистрация
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
                  type="password"
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
            <Controller
              name="phone"
              control={control}
              rules={{
                required: "Обязательное поле",
                validate: (value) =>
                  validatePhone(value) || "Неверный формат номера",
              }}
              render={({ field }) => (
                <MuiTelInput
                  {...field}
                  fullWidth
                  label="Номер телефона *"
                  defaultCountry="KG"
                  value={field.value || ""}
                  onChange={(value) => field.onChange(value)}
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  sx={{
                    width: "384px",
                    height: "50px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      "& fieldset": { borderColor: "#303030" },
                      "&:hover fieldset": { borderColor: "#303030" },
                      "&.Mui-focused fieldset": { borderColor: "#303030" },
                    },
                    "& .MuiFormLabel-root.Mui-focused": { color: "#303030" },
                  }}
                />
              )}
            />

            <div className="flex gap-4 mt-[16px] mb-[20px]">
              <Controller
                name="lastName"
                control={control}
                rules={{ required: "Обязательное поле" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Фамилия *"
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                    sx={{
                      width: "184px",
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
                name="firstName"
                control={control}
                rules={{ required: "Обязательное поле" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Имя *"
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                    sx={{
                      width: "184px",
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
            </div>

            <Controller
              name="agreeTerms"
              control={control}
              rules={{ required: "Необходимо согласие с условиями" }}
              render={({ field }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      {...field}
                      color="primary"
                      checked={field.value || false}
                      onChange={(e) => field.onChange(e.target.checked)}
                      sx={{
                        "&.Mui-checked": {
                          color: "#303030",
                        },
                      }}
                    />
                  }
                  label="Я согласен с условиями обслуживания и политикой конфиденциальности"
                  className="block"
                />
              )}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="rounded-[10px] h-[54px] mt-[35px] normal-case"
              sx={{ background: "#303030" }}
              disabled={
                !watch("email") ||
                !watch("password") ||
                !watch("phone") ||
                !watch("lastName") ||
                !watch("firstName") ||
                !watch("agreeTerms")
              }
              onClick={() => navigate(pathKeys.settings())}
            >
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
      <Box className="mt-4 text-center bg-white rounded-lg shadow-md pt-[20px] pb-[24px] pl-[24px]">
        <div className="flex  items-center gap-x-[15px]">
          <img src={Person} alt="" />
          <Typography className="text-btnback text-left font-semibold text-[22px] leading-[28.6px]">
            У вас уже есть <br /> аккаунт?
          </Typography>
        </div>

        <div className="flex pt-[10px] ">
          <Typography>
            Вы можете
            <Link
              onClick={() => navigate(pathKeys.login())}
              className="text-blue-600 px-[5px]"
            >
              войти
            </Link>
            в личный кабинет.
          </Typography>
        </div>
      </Box>
    </div>
  );
};
