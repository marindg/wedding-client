import Link from "next/link";
import { sidebarData } from "@/constants";
import { sidebarItem } from "@/typings/types";
import { useRouter } from "next/navigation";

type sidebarProps = {
  isAdmin: boolean;
};

export default function Sidebar({ isAdmin }: sidebarProps) {
  const router = useRouter();

  async function toggleDeconnexion() {
    router.push("/");
  }

  return (
    <div className="min-w-[15em] h-full bg-slate-400 p-5">
      bienvenue
      <ul>
        {sidebarData.map((item: sidebarItem) => {
          if (!item.adminOnly || (item.adminOnly && isAdmin)) {
            return (
              <li key={item.id}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            );
          }
        })}
        <li onClick={toggleDeconnexion} className="cursor-pointer">
          Deconnexion
        </li>
      </ul>
    </div>
  );
}
