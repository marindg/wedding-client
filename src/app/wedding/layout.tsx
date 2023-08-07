"use client";

import Sidebar from "@/components/sidebar";
import { AppContext } from "@/context/appContext";
import { redirect } from "next/navigation";
import { useContext } from "react";

export default async function WeddingLayout({ children }: { children: React.ReactNode }) {
  const { user } = useContext(AppContext);

  if (!user) {
    redirect("/");
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar isAdmin={user.isAdmin} />
      <main className="bg-red-200 w-full p-5">{children}</main>
    </div>
  );
}
