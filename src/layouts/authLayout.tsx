import * as React from "react";
import Box from "@mui/material/Box";
import { ReactNode } from "react";
import { FormContainer } from "@/src/components/styled/loginFormPaper";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export default function AuthLayout({ children }: Props) {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <FormContainer elevation={3}>{children}</FormContainer>
    </Box>
  );
}
