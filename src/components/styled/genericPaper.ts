import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const GenericPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  height: "100%",
  width: "100%",
  display: "flex",
  padding: "15px",
  borderRadius: "15px",
}));
