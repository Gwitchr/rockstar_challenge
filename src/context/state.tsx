import { createContext, useContext, useState, Context } from "react";
import { EAppContent, IMovie } from "../types";

export interface IAppContext {
  selContent: EAppContent | null;
  selMovie: IMovie | null;
  sliderOpen: boolean;
  searchTerm: string;
  filter: number | null;
}

const AppContext: Context<any> = createContext(null);

const initialState = {
  selContent: null,
  selMovie: null,
  sliderOpen: false,
  searchTerm: "",
  filter: null,
};

export function AppWrapper({ children }: { children: JSX.Element }) {
  const [appState, setAppState] = useState<IAppContext>(initialState);

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
