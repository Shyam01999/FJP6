import { combineReducers } from "redux";
import loadReducer from "./load.reducers";
import themeReducer from "./theme.reducers";

const rootReducer = combineReducers({
  loadReducer:loadReducer,
  themeReducer:themeReducer
});

export default rootReducer;
