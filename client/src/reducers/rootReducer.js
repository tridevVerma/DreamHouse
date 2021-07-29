import { combineReducers } from "redux";
import allProperties from "./allProperties";
import filter from "./filter";
import tag from "./tag";
import allNews from "./allNews";
import detailedProperty from "./detailedProperty";

const rootReducer = combineReducers({
  allProperties,
  filter,
  tag,
  allNews,
  detailedProperty,
});

export default rootReducer;
