import {ReactElement} from "react";
import AuthLayout from "@/src/layouts/authLayout";
import Layout from "@/src/layouts/baseLayout";
import Button from "@mui/material/Button";
import {useFalconrDispatch} from "@/src/state/hooks";
import {logOut} from "@/src/state/slices/userSlice";

export default function Birds() {
  const dispatch = useFalconrDispatch();

  const handleSignOut = () => {
    dispatch(logOut());
  }


  return (
    <Button variant="contained" color={'primary'} onClick={handleSignOut}>Sign Out</Button>
  );
}

Birds.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <AuthLayout>
        {page}
      </AuthLayout>
    </Layout>
  )
}