import { useState, Dispatch, SetStateAction } from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { intervalOptions } from "../Constants";

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export default function BasicSelect({ value, setValue }: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="interval-select-label">Interval</InputLabel>
        <Select
          labelId="interval-select-label"
          id="interval-select"
          value={value}
          label="Interval"
          onChange={handleChange}
        >
          {intervalOptions.map((option: { label: string; value: number }) => (
            <MenuItem key={option.label} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
