import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const SideMenuPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...theme.typography.body2,
  padding: theme.spacing(4),
  width: "250px",
  color: theme.palette.text.secondary,
  borderRadius: "0px",
}));
