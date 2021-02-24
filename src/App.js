import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EstiloGlobal from "./EstiloGlobal";
import BarraNav from "./componentes/BarraNav";
import Inicio from "./componentes/Inicio";
import Pros from "./componentes/Pros";
import Contacto from "./componentes/Contacto";
import Articulos from "./componentes/Articulos";

function App() {
  return (
    <Router>
      <EstiloGlobal />
      <BarraNav />
      <Switch>
        <Route exact path="/" component={() => <Inicio />} />
        <Route path="/nosotras" component={() => <Pros />} />
        <Route path="/contacto" component={() => <Contacto />} />
        <Route path="/publicaciones" component={() => <Articulos />} />
      </Switch>
    </Router>
  );
}

export default App;
