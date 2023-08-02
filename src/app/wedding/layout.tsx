import Sidebar from "@/components/sidebar";
import getTodos from "@/lib/getTodos";
import { User } from "@/typings/types";

export default async function WeddingLayout({ children }: { children: React.ReactNode }) {
  const usersData: Promise<User[]> = getTodos();

  const users = await usersData;

  console.log("usersData:", usersData);
  console.log("users:", users);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <main className="bg-red-200 w-full p-5">{children}</main>
    </div>
  );
}
