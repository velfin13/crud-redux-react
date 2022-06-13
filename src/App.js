import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import Header from "./components/Header";
import NuevoProducts from "./components/Products/NuevoProducts";
import EditProducts from "./components/Products/EditProducts";

/* redux */
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path={"/"} component={Products} />
            <Route exact path={"/productos/nuevo"} component={NuevoProducts} />
            <Route
              exact
              path={"/productos/editar/:id"}
              component={EditProducts}
            />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
