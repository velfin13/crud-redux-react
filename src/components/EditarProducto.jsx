import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editarProductoAction } from "../actions/productoActions";

const EditarProducto = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const productoState = useSelector((state) => state.productos.productoEditar);

  const [producto, setProducto] = useState({
    name: "",
    price: 0,
  });

  // controla que el estado editar no sea null
  useEffect(() => {
    if (!productoState) {
      history.push("/");
    }
  }, []);

  useEffect(() => {
    setProducto(productoState);
  }, [productoState]);

  //boton editar
  const handleEditar = (e) => {
    e.preventDefault();
    dispatch(editarProductoAction(producto));
    history.push("/");
  };

  const onChangeProducto = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar producto
            </h2>

            <form onSubmit={handleEditar}>
              <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input
                  className="form-control"
                  name="name"
                  id="name"
                  type="text"
                  value={producto.name}
                  onChange={onChangeProducto}
                  placeholder="Nombre del producto"
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Precio:</label>
                <input
                  className="form-control"
                  name="price"
                  id="price"
                  value={producto.price}
                  onChange={onChangeProducto}
                  type="number"
                  placeholder="Precio del producto"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Editar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
