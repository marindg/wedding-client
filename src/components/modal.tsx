import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";

type modalProps = {
  isOpen: boolean;
  onOpenChange: () => void;
};

export function Modal({ isOpen, onOpenChange }: modalProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>("null");

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[19em] sm:max-w-[25em]">
        <DialogHeader>
          <DialogTitle>Create Login</DialogTitle>
          <DialogDescription>Create a new login who you will use on your next connexion.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 items-center">
            <Input id="login" className="col-span-3 uppercase placeholder:lowercase" placeholder="new login" />
            {errorMessage && <Label className="text-destructive font-medium py-1">{errorMessage}</Label>}
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Create login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
