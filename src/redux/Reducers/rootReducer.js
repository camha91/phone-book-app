import { combineReducers } from "redux";
import PhoneBookReducer from "./PhoneBookReducer";

const rootReducer = combineReducers({
  PhoneBookReducer,
});

export default rootReducer;
