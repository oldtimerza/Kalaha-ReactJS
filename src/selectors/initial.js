const game = state => {
  if (state.init && state.init.response) {
    return state.init.response;
  }
  return null;
};

const loading = state => {
  if (state.init && state.init.loading) {
    return state.init.loading;
  }
  return null;
};

export { game, loading };
