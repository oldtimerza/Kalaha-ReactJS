import typeFactory from "./typeFactory";

const actionFactory = function(name) {
  const types = typeFactory(name);

  const loading = loading => ({
    type: types.loadingType,
    payload: loading
  });

  const fetch = payload => ({
    type: types.fetchingType,
    payload: payload
  });

  const store = response => ({
    type: types.storingType,
    payload: response
  });

  const error = error => ({
    type: types.errorType,
    payload: error
  });

  return {
    loading,
    fetch,
    store,
    error
  };
};

export default actionFactory;
