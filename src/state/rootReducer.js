import { combineReducers } from "redux";
import user from "./user/reducer";
import error from "./error/reducer";

const reducers = {
  user,
  error
};

export default combineReducers(reducers);
