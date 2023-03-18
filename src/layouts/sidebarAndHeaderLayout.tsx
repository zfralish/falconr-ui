import * as React from "react";
import Box from "@mui/material/Box";
import {ReactNode} from "react";
import Grid from '@mui/material/Unstable_Grid2';
import {pink, yellow} from "@mui/material/colors";
interface Props {
  children?: ReactNode
  // any props that come into the component
}

export default function SidebarAndHeaderLayout({children}: Props) {
  return (

    <Box sx={{width: '100vw', height: '100vh'}}>
      <Grid container>
        <Grid xs={2} sx={{backgroundColor: yellow}}>
          sadfa
        </Grid>
        <Grid container xs={10} sx={{backgroundColor:pink}}>
          asdfasdf
        </Grid>
      </Grid>
        {children}
    </Box>
  )
}