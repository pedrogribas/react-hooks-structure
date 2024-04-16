import { LocalRoutes } from "./routes";
import { UsuarioLogadoProvider } from "./shared/contexts";

export const App = () => {
  return (
    <UsuarioLogadoProvider>
      <LocalRoutes />
    </UsuarioLogadoProvider>
  );
};
