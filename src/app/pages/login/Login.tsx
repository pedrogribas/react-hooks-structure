import { useEffect, useMemo, useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleEntrar = () => {
    console.log(email + " " + password);
  };
  useEffect(() => {
    console.log(password);
  }, [password]);
  useEffect(() => {
    console.log(email);
  }, [email]);
  useEffect(() => {
    if (window.confirm("Gatou ou cachorro?")) {
      console.log("Gatou");
    } else {
      console.log("Cachorro");
    }
  }, []);
  const emailLength = useMemo(() => {
    console.log("Executou");
    return email.length;
  }, [email]);

  return (
    <div>
      <form>
        <p>Quantidade de caracteres no e-mail: {emailLength}</p>
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
