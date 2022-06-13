import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import Header from "./components/Header";
import NuevoProducts from "./components/Products/NuevoProducts";
import EditProducts from "./components/Products/EditProducts";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-5">
        <Switch >
          <Route exact path={"/"} component={Products} />
          <Route exact path={"/productos/nuevo"} component={NuevoProducts} />
          <Route
            exact
            path={"/productos/editar/:id"}
            component={EditProducts}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
