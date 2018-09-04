import { combineReducers } from "redux";
import { reducer as init } from "./services/start";
import { reducer as sow } from "./services/sow";

const rootReducer = combineReducers({
  init,
  sow
});

export default rootReducer;
