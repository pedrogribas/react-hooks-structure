import { useContext } from "react";
import { UsuarioLogadoContext } from "../../../shared/contexts";

interface IButtonLoginProps {
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  children: React.ReactNode;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({
  onClick,
  type,
  children,
}) => {
  const usuarioLogadoContext = useContext(UsuarioLogadoContext);
  return (
    <button type={type} onClick={onClick}>
      {usuarioLogadoContext.nomeDoUsuario} {children}
    </button>
  );
};
