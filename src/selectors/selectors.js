const game = state => {
  if (state.sow && state.sow.response) {
    return state.sow.response;
  }
  if (state.init && state.init.response) {
    return state.init.response;
  }
  return null;
};

const loading = state => {
  if (state.sow && state.sow.loading) {
    return state.sow.loading;
  }
  if (state.init && state.init.loading) {
    return state.init.loading;
  }
  return null;
};
const error = state => {
  if (state.sow && state.sow.error) {
    return state.sow.error;
  }
  if (state.init && state.init.error) {
    return state.init.error;
  }
  return null;
};

export { game, loading, error };
