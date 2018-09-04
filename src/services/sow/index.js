import reducerFactory from "../reducerFactory";
import actionFactory from "../actionFactory";
import sagaFactory from "../sagaFactory";
import config from "../../config";

const serviceName = "sow";
const actions = actionFactory(serviceName);
const reducer = reducerFactory(serviceName);
const url = config.urls.base + config.urls.move;
const optionsConstructor = action => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({
      playerIndex: action.payload.playerIndex,
      pitNumber: action.payload.pitNumber,
      game: JSON.stringify(action.payload.game)
    })
  };
};
const saga = sagaFactory(serviceName, url, optionsConstructor);

export { serviceName, actions, reducer, saga };
