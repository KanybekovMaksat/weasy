import { useState } from "react";
import { Button, Typography, IconButton, Box } from "@mui/material";
import { CloudUpload, Delete } from "@mui/icons-material";

export const LogoUploadSection = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDelete = () => {
    setSelectedFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  };

  return (
    <div className="bg-[#F0F1F3] mb-[30px] p-5 rounded-lg space-y-4">
      <Typography
        variant="h6"
        className="font-medium font-[Rubik] mb-4 text-btnback"
      >
        Логотип компании
      </Typography>

      <Typography variant="body2" className="mb-6 text-base font-[Rubik]">
        Загрузите квадратный логотип (соотношение 1x1), который мы автоматически
        преобразуем в круглую форму.
      </Typography>

      <div className=" items-start">
        <div className="">
          <Button
            component="label"
            variant="contained"
            fullWidth
            className="bg-white text-black normal-case py-[15px] font-[Rubik] text-base border-dashed border border-[#969696] hover:bg-blue-600"
          >
            Загрузить изображение
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleFileUpload}
            />
          </Button>
        </div>

        {previewUrl && (
          <div className="flex items-center justify-between group pt-[30px]">
            <img
              src={previewUrl}
              alt="Логотип компании"
              className="w-24 h-24 object-cover rounded-lg "
            />
            <IconButton
              onClick={handleDelete}
              className=" bg-white text-red rounded-[4px] py-[13px] px-[14.5px] hover:bg-red-50"
              size="small"
            >
              <Delete className="text-red-500" fontSize="small" />
            </IconButton>
          </div>
        )}
        {selectedFile && (
          <div className="mt-2 flex items-center gap-2">
            <Typography variant="body2" className="text-gray-600">
              {selectedFile.name}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};
