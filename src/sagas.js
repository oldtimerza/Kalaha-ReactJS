import { saga as start } from "./services/start";

const sagas = {
  startSaga: start.root
};

export function registerWithMiddleware(middleware) {
  for (let name in sagas) {
    middleware.run(sagas[name]);
  }
}
