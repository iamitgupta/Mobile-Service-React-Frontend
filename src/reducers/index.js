import mobileReducers from "./mobileReducers";
import { combineReducers } from "redux";

export default combineReducers({
  mobile: mobileReducers,
});
