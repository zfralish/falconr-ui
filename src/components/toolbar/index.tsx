import {
  Avatar,
  Breadcrumbs,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import * as React from "react";
import { ToolBarPaper } from "@/src/components/styled/toolbarPaper";
import { useFalconrSelector } from "@/src/state/hooks";

export default function Toolbar() {
  const email = useFalconrSelector((state) => state.user.email);

  return (
    <ToolBarPaper elevation={3}>
      <FormControl
        size={"small"}
        sx={{ minWidth: 80, maxWidth: 200 }}
        fullWidth
      >
        <InputLabel id="demo-simple-select-label">Bird</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"Xerxes"}
          label="Bird"
          onChange={() => {}}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Stack direction={"row-reverse"} alignItems={"center"} spacing={2}>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        <Typography variant="subtitle1" color="d">
          {email}
        </Typography>
      </Stack>
    </ToolBarPaper>
  );
}
