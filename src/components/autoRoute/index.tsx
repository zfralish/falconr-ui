import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useFalconrDispatch, useFalconrSelector } from "@/src/state/hooks";
import { onAuthStateChanged } from "@firebase/auth";
import { Auth } from "@/src/firebase/firebase";
import { clearUserInfo, updateUserInfo } from "@/src/state/slices/userSlice";
import Layout from "@/src/layouts/baseLayout";
import AuthLayout from "@/src/layouts/authLayout";
import LoginForm from "@/src/components/loginForm";
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
        console.log("redirecting to dashboard");
        router.push("/dashboard");
      } else if (!loggedIn && router.route !== "/auth/sign-in") {
        console.log("redirecting to sign in");
        router.push("/auth/sign-in");
      }
    }
  }, [loggedIn, initialized]);

  const routeBasedRender = () => {
    if (router.route === "/auth/sign-in" || loggedIn) {
      return children;
    }
    return (
      <Layout>
        <></>
      </Layout>
    );
  };

  return <>{routeBasedRender()}</>;
}
