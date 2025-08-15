import { Button, Input, Label } from "@/shared/ui";
import { useState } from "react";
import { useLogin } from "../model";

export const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, isLoading } = useLogin();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm w-full mx-auto">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          disabled={isLoading}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          disabled={isLoading}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button disabled={isLoading} type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
};
