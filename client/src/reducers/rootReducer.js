import { combineReducers } from "redux";
import allProperties from "./allProperties";
import filter from "./filter";
import tag from "./tag";
import allNews from "./allNews";
import detailedProperty from "./detailedProperty";
import currentUser from "./currentUser";
import loginDialog from "./loginDialog";

const rootReducer = combineReducers({
  allProperties,
  filter,
  tag,
  allNews,
  detailedProperty,
  currentUser,
  loginDialog,
});

export default rootReducer;
