import type { RootState } from "@/app/stores/mainStore";
import { useLogin } from "@/features/login/model";
import { Button } from "@/shared/ui";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const { logoutUser } = useLogin();

  return (
    <header className="w-full p-4 border-b flex justify-between items-center">
      <h2 className="text-lg font-semibold">Articles</h2>
      {user?.id ? (
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">{user.email}</span>
          <Button variant={"outline"} onClick={logoutUser}>
            Logout
          </Button>
        </div>
      ) : (
        <span className="text-sm text-muted-foreground">
          <Link to={"/login"}>Login</Link>
        </span>
      )}
    </header>
  );
};
