import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import { Link } from "react-router-dom";
import { UsuarioLogadoContext } from "../../shared/contexts";

export const Login = () => {
  const usuarioLogadoContext = useContext(UsuarioLogadoContext);
  //ou   const { nomeDoUsuario } = useContext(UsuarioLogadoContext);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleEntrar = useCallback(() => {
    console.log(email + " " + password);
  }, [email, password]);
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
    console.log("UseMemo");
    return email.length;
  }, [email]);

  return (
    <div>
      <form>
        <p>Quantidade de caracteres no e-mail: {emailLength}</p>
        <p>{usuarioLogadoContext.nomeDoUsuario}</p>
        <InputLogin
          label="E-mail"
          onChange={(newValue) => setEmail(newValue)}
          type="email"
          value={email}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />
        {/* <label>
          <span>E-mail</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (inputPasswordRef.current !== null) {
                e.key === "Enter"
                  ? inputPasswordRef.current.focus()
                  : undefined;
              }
            }}
          />
        </label> */}

        <InputLogin
          label="Password"
          ref={inputPasswordRef}
          onChange={(newValue) => setPassword(newValue)}
          type="password"
          value={password}
        />
        {/* <label>
          <span>Senha</span>
          <input
            type="password"
            value={password}
            ref={inputPasswordRef}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label> */}
        {/* <button onClick={HandleEntrar} type="button">
          Entrar
        </button> */}
        <ButtonLogin onClick={HandleEntrar} type="button">
          Entrar
        </ButtonLogin>
        <ButtonLogin onClick={HandleEntrar} type="button">
          <Link to="../dashboard/Dashboard.tsx">DashBoard</Link>
        </ButtonLogin>
      </form>
    </div>
  );
};
