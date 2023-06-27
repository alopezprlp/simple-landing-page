"use client";
import { GlobalContextProvider } from "@/context/store";
import { ReactNode, FC } from "react";

interface IProviders {
  children: ReactNode;
}
const Providers: FC<IProviders> = ({ children }) => {
  return <GlobalContextProvider>{children}</GlobalContextProvider>;
};

export default Providers;
