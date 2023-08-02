import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function NewLoginDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Dialog</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>View code</DialogTitle>
          <DialogDescription>
            You can use the following code to start integrating your current prompt and settings into your application.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
