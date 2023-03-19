import { ReactElement } from "react";
import AuthLayout from "@/src/layouts/authLayout";
import Layout from "@/src/layouts/baseLayout";
import LoginForm from "@/src/components/loginForm";

export default function SignIn() {
  return <LoginForm />;
}

SignIn.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <AuthLayout>{page}</AuthLayout>
    </Layout>
  );
};
