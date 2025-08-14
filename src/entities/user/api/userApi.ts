import type { User } from "../model";
import { axiosInstance } from "@/shared/api";

export const loginUser = async (
  email: string,
  password: string
): Promise<User> => {
  const response = await axiosInstance.get<User[]>("/users", {
    params: { email, password },
  });

  const user = response.data[0];
  if (!user) throw new Error("Email atau password salah");

  return user;
};
