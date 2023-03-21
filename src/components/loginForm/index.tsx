import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import React from "react";
import { useFalconrDispatch } from "@/src/state/hooks";
import { logIn } from "@/src/state/slices/userSlice";

export default function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useFalconrDispatch();

  const handleLogin = () => {
    dispatch(logIn({ email, password }));
  };

  const renderLoginForm = () => {
    return (
      <Grid
        container
        spacing={3}
        direction="column"
        alignContent="center"
        alignItems="center"
      >
        <Grid xs={10}>
          <TextField
            fullWidth
            id="email-input"
            label="Email"
            autoComplete="current-password"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid xs={10}>
          <TextField
            fullWidth
            id="password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid xs={8}>
          <Button
            fullWidth
            variant="contained"
            color={"primary"}
            onClick={handleLogin}
          >
            Sign In
          </Button>
        </Grid>
        <Grid xs={8}>
          <Button fullWidth variant="contained" color={"success"}>
            Create an Account
          </Button>
        </Grid>
      </Grid>
    );
  };

  return renderLoginForm();
}
