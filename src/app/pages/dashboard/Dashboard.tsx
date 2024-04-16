import { useRef } from "react";
import { Link } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";

export const Dashboard = () => {
  const counterRef = useRef({ counter: 0 });

  const { nomeDoUsuario, logout } = useUsuarioLogado();

  return (
    <div>
      <p>Dashboard</p>
      <p> {nomeDoUsuario}</p>
      <p>{counterRef.current.counter}</p>
      <button type="button" onClick={() => counterRef.current.counter++}>
        Adicionar
      </button>
      <button
        type="button"
        onClick={() => console.log(counterRef.current.counter)}
      >
        Log
      </button>
      <button type="button" onClick={logout}>
        Logout
      </button>
      <Link to="/login">Login</Link>
    </div>
  );
};
