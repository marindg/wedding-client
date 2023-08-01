import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      hello app
      <Button variant="default">
        <Link href={"/wedding"}>wedding</Link>
      </Button>
    </main>
  );
}
