import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const ToolBarPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0px 15px 0px 15px",
  borderRadius: "15px",
}));
