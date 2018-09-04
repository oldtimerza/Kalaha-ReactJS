import typeFactory from "./typeFactory";

const reducerFactory = function(name) {
  const types = typeFactory(name);
  const initialState = {
    loading: false,
    response: null,
    error: null
  };
  return function(state = initialState, action) {
    switch (action.type) {
      case types.loadingType:
        return Object.assign({}, state, { loading: action.payload });
      case types.storingType:
        return Object.assign({}, state, { response: action.payload });
      case types.errorType:
        return Object.assign({}, state, { error: action.payload });
      default:
        return state;
    }
  };
};

export default reducerFactory;
