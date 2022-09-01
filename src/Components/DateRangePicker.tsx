import { useState, Dispatch, SetStateAction } from "react";
import dayjs, { Dayjs } from "dayjs";
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

interface Props {
  value: Dayjs | null | undefined;
  setValue: Dispatch<SetStateAction<dayjs.Dayjs | null | undefined>>;
  label: string;
}

export default function ResponsiveDateTimePickers({
  value,
  setValue,
  label,
}: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label={label}
        renderInput={(params) => <TextField sx={{ mx: 1 }} {...params} />}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
  );
}
