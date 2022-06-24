import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editarProductoApiAction } from "../../actions/productoActions";
import { useHistory } from "react-router-dom";

const EditProducts = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  //nuevo state de producto
  const [productoState, setProductoState] = useState({
    name: "",
    price: "",
  });

  const handleEditarProducto = (e) => {
    e.preventDefault();
    dispatch(editarProductoApiAction(productoState));
  };

  const productoEditar = useSelector((state) => state.productos.productoEditar);
  if (!productoEditar) {
    history.push("/");
  }

  useEffect(() => {
    setProductoState(productoEditar);
  }, [productoEditar]);

  //LEER LOS DATOS DEL FORMULARIO
  const onchangeFormulario = (e) => {
    setProductoState({ ...productoState, [e.target.name]: e.target.value });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar producto
            </h2>

            <form onSubmit={handleEditarProducto}>
              <div className="form-group">
                <label>Nombre:</label>
                <input
                  type="text"
                  placeholder="Ingresa el Nombre"
                  className="form-control"
                  name="name"
                  onChange={onchangeFormulario}
                  value={productoState.name}
                />
              </div>

              <div className="form-group">
                <label>Precio:</label>
                <input
                  type="number"
                  placeholder="Ingresa el Precio"
                  className="form-control"
                  name="price"
                  onChange={onchangeFormulario}
                  value={productoState.price}
                />
              </div>

              <button
                type="subtmit"
                className="btn  btn-primary font-weight-bold text-uppercase d-block w-100"
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

export default EditProducts;
