import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useFalconrSelector } from "@/src/state/hooks";
import Layout from "@/src/layouts/baseLayout";
interface AutoRouteProps {
  children: React.ReactNode;
}

export function AutoRoute({ children }: AutoRouteProps) {
  const router = useRouter();
  const loggedIn = useFalconrSelector((state) => state.user.loggedIn);
  const initialized = useFalconrSelector((state) => state.user.initialized);
  const [prevRoute, setPrevRoute] = React.useState<string>("");

  useEffect(() => {
    if (initialized) {
      if (loggedIn && router.route === "/auth/sign-in") {
        router.push("/dashboard");
      } else if (!loggedIn && router.route !== "/auth/sign-in") {
        router.push("/auth/sign-in");
      }
    }
  }, [loggedIn, initialized]);

  const routeBasedRender = () => {
    if (router.route === "/auth/sign-in" || loggedIn) {
      return children;
    }

    //TODO put spinner here
    return (
      <Layout>
        <></>
      </Layout>
    );
  };

  return <>{routeBasedRender()}</>;
}
