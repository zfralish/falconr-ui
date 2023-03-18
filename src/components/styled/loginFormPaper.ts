import {styled} from "@mui/material/styles";
import {Paper} from "@mui/material";

export const FormContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...theme.typography.body2,
  padding: theme.spacing(4),
  width: '450px',
  marginTop: '15vh',
  '@media (max-width: 500px)': {
    width: '300px'
  },
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: '15px',
}));