import * as React from "react";
import Box from "@mui/material/Box";
import { ReactNode } from "react";
import { pink, yellow } from "@mui/material/colors";
import Toolbar from "@/src/components/toolbar";
import Sidebar from "@/src/components/sideBar";
interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export default function SidebarAndHeaderLayout({ children }: Props) {
  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            height: "100px",
            padding: "15px 30px 15px 30px",
          }}
        >
          <Toolbar />
        </Box>
        <Box sx={{ flexGrow: 1, padding: "15px 30px 15px 30px" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
