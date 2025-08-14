import type { User } from "./types";
import userReducer from "./userSlice"
import { login, logout } from "./thunks";

export type { User };
export {userReducer, login, logout };