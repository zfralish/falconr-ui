import { Stack, Typography } from "@mui/material";
import React from "react";

interface labeledDataProps {
  label: string;
  value: string;
  units: string;
  color: string;
}

export function LabeledData({ label, value, units, color }: labeledDataProps) {
  return (
    <Stack alignItems={"center"}>
      <Typography variant="subtitle2" color={"secondary"}>
        {label}
      </Typography>
      <Stack direction={"row"} alignItems={"flex-end"} spacing={1}>
        <Typography color={color} variant="h4">
          {value}
        </Typography>
        <Typography color={color} variant="subtitle2">
          {units}
        </Typography>
      </Stack>
    </Stack>
  );
}
