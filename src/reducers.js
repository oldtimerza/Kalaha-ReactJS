import { combineReducers } from "redux";
import { reducer as init } from "./services/start";

const rootReducer = combineReducers({
  init
});

export default rootReducer;
