// widgets/doctor-schedule/ui.tsx
import { useState } from "react";
import { Doctor, doctorsMock } from "~entities/doctor-schedule";
import { Avatar, Typography } from "@mui/material";
import { EditScheduleModal } from "~features/schedule-editor";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export const DoctorSchedule = () => {
  const [doctors, setDoctors] = useState<Doctor[]>(doctorsMock);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const handleSaveSchedule = (updatedDoctor: Doctor) => {
    setDoctors((prev) =>
      prev.map((doc) => (doc.id === updatedDoctor.id ? updatedDoctor : doc))
    );
    setSelectedDoctor(null);
  };

  return (
    <div className="space-y-6 pl-6">
      {doctors.map((doctor) => (
        <div
          key={doctor.id}
          className="p-4 relative border border-[#EBEBEB] rounded-[10px]"
        >
          <div className="absolute top-2 left-2">
            <Button
              variant="outlined"
              onClick={() => setSelectedDoctor(doctor)}
              className=" min-w-0  mx-auto bg-btnback text-white max-w-[30px] h-[30px] "
            >
              <EditIcon className="text-[15px]" />
            </Button>
          </div>

          <div className="flex items-center gap-x-[24px]">
            <div className="max-w-[117px]">
              <Avatar
                src={doctor.avatar}
                alt={doctor.name}
                className="mx-auto"
              />
              <div>
                <h3 className="text-base font-medium text-btnback font-[Inter] pt-[10px] mx-auto">
                  {doctor.name}
                </h3>
              </div>
            </div>

            <div className="flex gap-x-[15px]">
              {doctor.schedule.map((day) => (
                <div
                  key={day.day}
                  className="min-w-[120px] text-center mx-auto"
                >
                  <div className=" ">
                    <Typography className="font-medium text-center text-base text-btnback">
                      {day.day.split(" ")[0]} {day.day.split(" ")[1]}
                    </Typography>
                  </div>
                  <div
                    className={`w-[120px] h-[120px] rounded-lg text-center flex items-center justify-center  ${
                      day.isWeekend ? "bg-[#FF4931] text-white" : "bg-[#F0F1F3]"
                    }`}
                  >
                    <div className="text-center ">
                      {day.isWeekend ? (
                        <div className="text-sm ">Выходной</div>
                      ) : (
                        day.hours?.map((hour) => (
                          <div key={hour} className="text-sm mt-[5px]">
                            {hour}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {selectedDoctor && (
        <EditScheduleModal
          open={!!selectedDoctor}
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
          onSave={handleSaveSchedule}
        />
      )}
    </div>
  );
};
