import { useRef } from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const counterRef = useRef({ counter: 0 });
  return (
    <div>
      <p>Dashboard</p>
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
      <Link to="/login">Login</Link>
    </div>
  );
};
