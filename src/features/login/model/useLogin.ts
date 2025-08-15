import type { AppDispatch, RootState } from "@/app/stores/mainStore";
import { login, logout } from "@/entities/user/model";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const loginUser = (email: string, password: string) => {
    dispatch(login({ email, password }));
  };

  const logoutUser = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  return {
    isLoading,
    loginUser,
    logoutUser,
  };
};
