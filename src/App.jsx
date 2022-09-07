import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import NuevoProducto from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";
import Productos from "./components/Productos";

//redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Productos} />
            <Route path="/productos/nuevo" exact component={NuevoProducto} />
            <Route
              path="/productos/editar/:id"
              exact
              component={EditarProducto}
            />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
