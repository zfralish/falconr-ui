import * as React from "react";
import { SideMenuPaper } from "@/src/components/styled/sideMenuPaper";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import { useFalconrDispatch } from "@/src/state/hooks";
import { clearUserInfo, logOut } from "@/src/state/slices/userSlice";
import { useRouter } from "next/router";

export const RoundedListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: "5px",
  width: "100%",
}));

const NavList = styled(List)<{ component?: React.ElementType }>({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

export default function Sidebar() {
  const dispatch = useFalconrDispatch();
  const router = useRouter();
  const handleSignOut = () => {
    router.push("/auth/sign-in");
    dispatch(logOut());
  };

  return (
    <SideMenuPaper elevation={3}>
      <Stack
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ height: "100%" }}
      >
        <Stack alignItems={"center"}>
          <Typography variant="h4" gutterBottom>
            Falconr
          </Typography>
          <Box sx={{ width: "100%" }}>
            <NavList>
              <Link href={"/dashboard"} passHref>
                <ListItem disablePadding>
                  <RoundedListItemButton>
                    <ListItemIcon>
                      <Typography variant={"h5"}>🏠</Typography>
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </RoundedListItemButton>
                </ListItem>
              </Link>
              <Link href={"/birds"} passHref>
                <ListItem disablePadding>
                  <RoundedListItemButton>
                    <ListItemIcon>
                      <Typography variant={"h5"}>🐦</Typography>
                    </ListItemIcon>
                    <ListItemText primary="Birds" />
                  </RoundedListItemButton>
                </ListItem>
              </Link>
              <Link href={"/feedings"} passHref>
                <ListItem disablePadding>
                  <RoundedListItemButton>
                    <ListItemIcon>
                      <Typography variant={"h5"}>🍗</Typography>
                    </ListItemIcon>
                    <ListItemText primary="Food Log" />
                  </RoundedListItemButton>
                </ListItem>
              </Link>
              <Link href={"/hunts"} passHref>
                <ListItem disablePadding>
                  <RoundedListItemButton>
                    <ListItemIcon>
                      <Typography variant={"h5"}>🦴</Typography>
                    </ListItemIcon>
                    <ListItemText primary="Hunting Log" />
                  </RoundedListItemButton>
                </ListItem>
              </Link>
              <Link href={"/trainings"} passHref>
                <ListItem disablePadding>
                  <RoundedListItemButton>
                    <ListItemIcon>
                      <Typography variant={"h5"}>💪🏼</Typography>
                    </ListItemIcon>
                    <ListItemText primary="Training Log" />
                  </RoundedListItemButton>
                </ListItem>
              </Link>
            </NavList>
          </Box>
        </Stack>
        <NavList>
          <Link href={"/settings"} passHref>
            <ListItem disablePadding>
              <RoundedListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </RoundedListItemButton>
            </ListItem>
          </Link>
          <Link href={"/auth/sign-in"} passHref>
            <ListItem disablePadding>
              <RoundedListItemButton onClick={handleSignOut}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Log Out" />
              </RoundedListItemButton>
            </ListItem>
          </Link>
        </NavList>
      </Stack>
    </SideMenuPaper>
  );
}
