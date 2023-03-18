import {ReactElement} from "react";
import Layout from "@/src/layouts/baseLayout";
import {useFalconrDispatch} from "@/src/state/hooks";
import {logOut} from "@/src/state/slices/userSlice";
import Grid from "@mui/material/Unstable_Grid2";
import {pink, red, yellow} from "@mui/material/colors";
import Box from "@mui/material/Box";
import * as React from "react";

export default function Birds() {
  const dispatch = useFalconrDispatch();

  const handleSignOut = () => {
    dispatch(logOut());
  }

  return (
    <Box sx={{width: '100vw', height: '100vh', backgroundColor:'red'}}>
      <Grid container>
        <Grid xs={2} sx={{backgroundColor: yellow}}>
          sadfa
        </Grid>
        <Grid container xs={10} sx={{backgroundColor:pink}}>
          asdfasdf
        </Grid>
      </Grid>
    </Box>
  );
}

Birds.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}