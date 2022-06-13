import React from "react";

const EditProducts = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar producto
            </h2>

            <form>
              <div className="form-group">
                <label>Nombre:</label>
                <input
                  type="text"
                  placeholder="Ingresa el Nombre"
                  className="form-control"
                  name="name"
                />
              </div>

              <div className="form-group">
                <label>Precio:</label>
                <input
                  type="number"
                  placeholder="Ingresa el Precio"
                  className="form-control"
                  name="price"
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
