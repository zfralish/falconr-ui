import * as React from "react";
import { ReactElement } from "react";
import Layout from "@/src/layouts/baseLayout";
import { useFalconrDispatch } from "@/src/state/hooks";
import { logOut } from "@/src/state/slices/userSlice";
import Grid from "@mui/material/Unstable_Grid2";
import { deepPurple, pink, yellow } from "@mui/material/colors";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Avatar, Breadcrumbs, Link, Paper, Typography } from "@mui/material";
import Toolbar from "@/src/components/toolbar";
import { width } from "@mui/system";
import AuthLayout from "@/src/layouts/authLayout";
import SignIn from "@/pages/auth/sign-in";
import SidebarAndHeaderLayout from "@/src/layouts/sidebarAndHeaderLayout";

export default function Birds() {
  const dispatch = useFalconrDispatch();

  const handleSignOut = () => {
    dispatch(logOut());
  };

  return <p>sadfasdf</p>;
}

Birds.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <SidebarAndHeaderLayout>{page}</SidebarAndHeaderLayout>
    </Layout>
  );
};
