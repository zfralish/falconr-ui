import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const LeftJustifiedButton = styled(Button)(({ theme }) => ({
  justifyContent: "start",
  textTransform: "none",
}));
