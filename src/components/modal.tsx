import React, { useContext } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { postLogin } from "@/lib/auth";
import { sleep } from "@/lib/utils";
import { AppContext } from "@/context/appContext";

type modalProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  token: string | null;
};

export function Modal({ isOpen, onOpenChange, token }: modalProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const { setUser } = useContext(AppContext);

  const router = useRouter();

  async function onSubmit(event: React.SyntheticEvent) {
    setErrorMessage(null);
    setIsLoading(true);
    event.preventDefault();

    // @ts-ignore
    const newLogin: string | null = event.target.login!.value;
    // @ts-ignore
    const newLoginConfirmed: string | null = event.target.login_confirm!.value;

    if (!newLogin) {
      setIsLoading(false);
      setErrorMessage("new login is missing");
      return null;
    }

    if (newLogin !== newLoginConfirmed) {
      setErrorMessage("Login are not the same");
      setIsLoading(false);
      return null;
    }

    if (token === null || token === undefined) {
      setErrorMessage("Token undefined");
      setIsLoading(false);
      return null;
    }

    const res = await postLogin(newLogin, token);

    if (res.status !== "success") {
      setErrorMessage(res.response);
    }
    if (res.status === "success") {
      await sleep(1500);
      if (setUser) {
        setUser(res.response);
      } else {
        console.warn("setUser function is not available");
      }

      router.push("/wedding");
    }

    setIsLoading(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[19em] sm:max-w-[25em]">
        <DialogHeader>
          <DialogTitle>Create Login</DialogTitle>
          <DialogDescription>Create a new login who you will use on your next connexion.</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-1 items-center">
            <Input id="login" className="col-span-3 uppercase placeholder:lowercase" placeholder="new login" />
            {errorMessage && <Label className="text-destructive font-medium py-1  pl-[2px]">{errorMessage}</Label>}
          </div>
          <div className="grid grid-cols-1 items-center">
            <Input id="login_confirm" className="col-span-3 uppercase placeholder:lowercase" placeholder="confirm login" />
          </div>

          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
              Create login
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
