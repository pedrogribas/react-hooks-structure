import { useEffect, useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleEntrar = () => {
    console.log(email + " " + password);
  };
  useEffect(() => {
    console.log();
  }, []);
  useEffect(() => {
    if (window.confirm("Gatou ou cachorro?")) {
      console.log("Gatou");
    } else {
      console.log("Cachorro");
    }
  }, []);

  return (
    <div>
      <form>
        <label>
          <span>E-mail</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={HandleEntrar} type="button">
          Entrar
        </button>
      </form>
    </div>
  );
};
