import { saga as start } from "./services/start";
import { saga as sow } from "./services/sow";

const sagas = {
  startSaga: start.root,
  sowSaga: sow.root
};

export function registerWithMiddleware(middleware) {
  for (let name in sagas) {
    middleware.run(sagas[name]);
  }
}
