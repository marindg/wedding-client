import { sidebarItem } from "@/typings";

export const sidebarData: sidebarItem[] = [
  { id: 1, name: "home", link: "/wedding", adminOnly: false },
  { id: 2, name: "address", link: "/wedding/address", adminOnly: false },
  { id: 3, name: "contact", link: "/wedding/contact", adminOnly: false },
  { id: 4, name: "schedule", link: "/wedding/schedule", adminOnly: false },
  { id: 5, name: "admin", link: "/wedding/admin", adminOnly: true },
];
