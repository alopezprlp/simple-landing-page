"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  FC,
  ReactNode,
} from "react";

export type DataType = {
  id: string;
  icon: any;
  iconActive?: any;
  title: string;
  description: string;
  link: string;
};

interface ContextProps {
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
}

const GlobalContext = createContext<ContextProps>({
  data: [],
  setData: (): DataType[] => [],
});

interface IProvider {
  children: ReactNode;
}
export const GlobalContextProvider: FC<IProvider> = ({ children }) => {
  const [data, setData] = useState<[] | DataType[]>([]);

  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
