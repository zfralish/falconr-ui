import { Avatar, Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import * as React from "react";
import { ToolBarPaper } from "@/src/components/styled/toolbarPaper";
import { useFalconrSelector } from "@/src/state/hooks";

export default function Toolbar() {
  const email = useFalconrSelector((state) => state.user.email);

  return (
    <ToolBarPaper elevation={3}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
      <Stack direction={"row-reverse"} alignItems={"center"} spacing={2}>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        <Typography variant="subtitle1" color="d">
          {email}
        </Typography>
      </Stack>
    </ToolBarPaper>
  );
}
