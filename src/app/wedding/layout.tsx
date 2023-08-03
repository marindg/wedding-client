import Sidebar from "@/components/sidebar";

import { User } from "@/typings/types";
import { useEffect } from "react";

export default async function WeddingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.cookie = "admin=true; SameSite=None; Secure";
    console.log(document.cookie);
  }, []);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <main className="bg-red-200 w-full p-5">{children}</main>
    </div>
  );
}
