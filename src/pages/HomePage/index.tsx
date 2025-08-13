import { Link } from "react-router-dom";

export const HomePage = () => {
  return <div>home <Link to={"/login"}>Login</Link></div>;
};
