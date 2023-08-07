export type sidebarItem = {
  id: number;
  name: string;
  link: string;
  adminOnly: boolean;
};

export type User = {
  login: string;
  token: string;
  isAdmin: boolean;
};
