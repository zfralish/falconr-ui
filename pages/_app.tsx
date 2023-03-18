import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { NordTheme } from "@/src/theme/nord";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { store } from "@/src/state/store";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Provider } from "react-redux";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "@/src/firebase/firebase";
import { clearUserInfo, updateUserInfo } from "@/src/state/slices/userSlice";
import { useRouter } from "next/router";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const { push, isReady } = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (user.uid !== store.getState().user.uid) {
        store.dispatch(updateUserInfo({ email: user.email, uid: user.uid }));
        if (isReady) {
          push("/birds");
        }
      }
    } else {
      store.dispatch(clearUserInfo());
      if (isReady) {
        push("/auth/sign-in");
      }
    }
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={NordTheme}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </Provider>
  );
}
