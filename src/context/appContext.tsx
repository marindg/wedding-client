"use client";

import React, { ReactNode, createContext, useState } from "react";
import { User } from "@/typings/types";

interface IContext {
  user: User | null;
  setUser?: (newUser: User) => void;
}

export const AppContext = createContext<IContext>({ user: null });

export const AppContextProvider: React.FC<IContext & { children: ReactNode }> = ({ children }) => {
  const [userState, setUserState] = useState<User | null>(null);

  const setUser = (newUser: User) => {
    setUserState(newUser);
  };

  return <AppContext.Provider value={{ user: userState, setUser }}>{children}</AppContext.Provider>;
};
