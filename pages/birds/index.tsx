import * as React from "react";
import { ReactElement } from "react";
import Layout from "@/src/layouts/baseLayout";
import { useFalconrDispatch } from "@/src/state/hooks";
import SidebarAndHeaderLayout from "@/src/layouts/sidebarAndHeaderLayout";
import BirdCardStack from "@/src/components/birdCardStack/birdCardStack";

export default function Birds() {
  const dispatch = useFalconrDispatch();

  return <BirdCardStack />;
}

Birds.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <SidebarAndHeaderLayout>{page}</SidebarAndHeaderLayout>
    </Layout>
  );
};
