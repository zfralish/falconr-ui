import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword, signOut, User } from "@firebase/auth";
import { RootState } from "@/src/state/store";

export const logIn = createAsyncThunk(
  "user/logIn",
  async (credentials: { email: string; password: string }) => {
    const { email, password } = credentials;
    await signInWithEmailAndPassword(Auth, email, password);
  }
);

export const logOut = createAsyncThunk("user/logOut", async () => {
  await signOut(Auth);
});

export interface UserState {
  loggedIn: boolean;
  initialized: boolean;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: UserState = {
  loggedIn: false,
  initialized: false,
  loading: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserInfo: (state) => {
      state.loggedIn = true;
      state.initialized = true;
    },
    clearUserInfo: (state) => {
      state.loggedIn = false;
      state.initialized = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(logIn.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(logIn.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(logOut.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(logOut.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(logOut.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

// Action creators are generated for each case reducer function
export const { updateUserInfo, clearUserInfo } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
