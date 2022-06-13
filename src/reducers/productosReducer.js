//cada reducer tiene su propio state
const initialValues = {
  productos: [],
  error: null,
  loading: false,
};

module.exports = (state = initialValues, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
