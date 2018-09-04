import fetch from "isomorphic-fetch";

import reducerFactory from "../reducerFactory";
import actionFactory from "../actionFactory";
import sagaFactory from "../sagaFactory";
import config from "../../config";

const serviceName = "start";
const actions = actionFactory(serviceName);
const reducer = reducerFactory(serviceName);
const url = config.urls.base + config.urls.start;
const optionsConstructor = action => {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  };
};
const saga = sagaFactory(serviceName, url, optionsConstructor);

export { serviceName, actions, reducer, saga };
