import { combineReducers } from "redux";
import allProperties from "./allProperties";
import filter from "./filter";
import tag from "./tag";
import allNews from "./allNews";
import detailedProperty from "./detailedProperty";
import sellerProperties from "./sellerProperties";
import currentUser from "./currentUser";
import loginDialog from "./loginDialog";
import sellerData from "./sellerData";

const rootReducer = combineReducers({
  allProperties,
  filter,
  tag,
  allNews,
  detailedProperty,
  sellerProperties,
  currentUser,
  loginDialog,
  sellerData,
});

export default rootReducer;
