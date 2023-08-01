import Link from "next/link";
import { sidebarData } from "@/constants";

export default function Sidebar() {
  return (
    <div className="min-w-[15em] h-full bg-slate-400 p-5">
      bienvenue
      <ul>
        {sidebarData.map((item) => {
          return (
            <li key={item.id}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
