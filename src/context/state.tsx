import { createContext, useContext, useState, Context } from "react";

const AppContext: Context<any> = createContext(null);

const initialState = {};

export function AppWrapper({ children }: { children: JSX.Element }) {
  const [appState, setAppState] = useState(initialState);

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
