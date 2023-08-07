"use client";

import React, { useContext } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { Modal } from "@/components/modal";

import { signInByLogin } from "@/lib/auth";
import { sleep } from "@/lib/utils";
import { AppContext } from "@/context/appContext";
import useLocalStorage from "@/hooks/useLocalStorage";
import { User } from "@/typings/types";

export default function Home() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [newLoginDialogOpen, setNewLoginDialogOpen] = React.useState<boolean>(false);
  const [token, setToken] = React.useState<string | null>(null);
  const { setUser } = useContext(AppContext);
  const [value, setValue] = useLocalStorage("user", "");

  const router = useRouter();

  async function onSubmit(event: React.SyntheticEvent) {
    setErrorMessage(null);
    setIsLoading(true);
    event.preventDefault();

    // @ts-ignore
    const login: string | null = event.target.login!.value;

    if (!login) {
      setIsLoading(false);
      setErrorMessage("login is missing");
      return null;
    }

    const res = await signInByLogin(login!);

    if (res.status === "error") {
      setErrorMessage(res.response);
    }
    if (res.status === "create") {
      setToken(res.response);
      setNewLoginDialogOpen(true);
    }
    if (res.status === "success") {
      const userData: User = res.response;

      setToken(userData.token);
      if (setUser) {
        setUser(res.response);
      } else {
        console.warn("setUser function is not available");
      }

      setValue(userData.token, null);
      await sleep(1000);
      router.push("/wedding");
    }

    setIsLoading(false);
  }

  return (
    <>
      {newLoginDialogOpen && <Modal isOpen={newLoginDialogOpen} onOpenChange={setNewLoginDialogOpen} token={token} />}
      <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-primary" />
          <div className="relative z-20 flex items-center text-lg font-medium">Wedding</div>
        </div>

        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <form onSubmit={onSubmit} className="flex gap-2 flex-col">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">LOGIN</h1>
                <Label className="text-sm text-muted-foreground" htmlFor="login">
                  Enter your past login or the code on the invitation flyer
                </Label>
              </div>
              <Input
                type="text"
                name="login"
                id="login"
                placeholder="login or password"
                disabled={isLoading}
                className="uppercase placeholder:lowercase"
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                Login
              </Button>
              {errorMessage && <Label className="text-destructive font-medium">{errorMessage}</Label>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
