import React, { createContext, useCallback } from "react";

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
  logout: () => void;
}
interface IUsuarioLogadoProviderProps {
  children: React.ReactNode;
}
export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>(
  {} as IUsuarioLogadoContextData
);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({
  children,
}) => {
  const handleLogout = useCallback(() => {
    console.log("logout executou");
  }, []);
  return (
    <UsuarioLogadoContext.Provider
      value={{ nomeDoUsuario: "Default", logout: handleLogout }}
    >
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
