import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {auth} from '../../firebase/firebase'
import {signInWithEmailAndPassword, signOut} from "@firebase/auth";

export const logIn = createAsyncThunk(
  'user/logIn',
  async (credentials: { email: string, password: string }) => {
    console.log(credentials)
    const {email, password} = credentials
    await signInWithEmailAndPassword(auth, email, password)
  }
)

export const logOut = createAsyncThunk(
  'user/logOut',
  async () => {
    await signOut(auth)
  }
)

export interface UserState {
  uid: string,
  email: string | null,
  loggedIn: boolean,
  loading: 'idle' | 'pending' | 'succeeded' | 'failed',
}

const initialState: UserState = {
  uid: '',
  email: null,
  loggedIn: false,
  loading: 'idle'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserInfo: (state, action: PayloadAction<{ uid: string, email: string | null }>) => {
      state.uid = action.payload.uid
      state.email = action.payload.email
      state.loggedIn = true
    },
    clearUserInfo: (state) => {
      state.uid = ''
      state.email = ''
      state.loggedIn = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(logIn.fulfilled, (state) => {
        state.loading = 'succeeded'
      })
      .addCase(logIn.rejected, (state) => {
        state.loading = 'failed'
      })
      .addCase(logOut.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(logOut.fulfilled, (state) => {
        state.loading = 'succeeded'
      })
      .addCase(logOut.rejected, (state) => {
        state.loading = 'failed'
      })
  }
})

// Action creators are generated for each case reducer function
export const {updateUserInfo, clearUserInfo} = userSlice.actions
export default userSlice.reducer