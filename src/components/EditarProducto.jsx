import React from "react";

const EditarProducto = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Editar producto</h2>

            <form>
              <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input
                  className="form-control"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Nombre del producto"
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Precio:</label>
                <input
                  className="form-control"
                  name="price"
                  id="price"
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
