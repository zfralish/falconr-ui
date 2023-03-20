import * as React from "react";
import { ReactElement } from "react";
import Layout from "@/src/layouts/baseLayout";
import { useFalconrDispatch } from "@/src/state/hooks";
import { logOut } from "@/src/state/slices/userSlice";
import SidebarAndHeaderLayout from "@/src/layouts/sidebarAndHeaderLayout";

export default function Hunts() {
  const dispatch = useFalconrDispatch();

  const handleSignOut = () => {
    dispatch(logOut());
  };

  return <p>sadfasdf</p>;
}

Hunts.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <SidebarAndHeaderLayout>{page}</SidebarAndHeaderLayout>
    </Layout>
  );
};
