import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EstiloGlobal from "./EstiloGlobal";
import BarraNav from "./componentes/BarraNav";
import Inicio from "./componentes/Inicio";
import Pros from "./componentes/Pros";
import Contacto from "./componentes/Contacto";

function App() {
  return (
    <Router>
      <EstiloGlobal />
      <BarraNav />
      <Switch>
        <Route exact path="/" component={() => <Inicio />} />
        <Route path="/nosotras" component={() => <Pros />} />
        <Route path="/contacto" component={() => <Contacto />} />
      </Switch>
    </Router>
  );
}

export default App;
