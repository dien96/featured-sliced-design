import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../api";
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  setUserToLocalStorage,
} from "../lib";
import { toast } from "sonner";

export const login = createAsyncThunk(
  "auth/login",
  async (payload: { email: string; password: string }, thunkAPI) => {
    try {
      const user = await loginUser(payload.email, payload.password);
      setUserToLocalStorage(user);
      return user;
    } catch (error: any) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  removeUserFromLocalStorage();
});

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, thunkAPI) => {
    try {
      const user = getUserFromLocalStorage();
      if (!user) throw new Error("tidak diautentikasi");
      return { user };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
