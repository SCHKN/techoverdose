import { combineReducers } from "redux";
import repos from "./repos/reposReducer";
import frameworks from "./frameworks/frameworksReducer";
import ui from "./ui/uiReducer";
import category from "./category/categoryReducer";

export default combineReducers({
  repos,
  frameworks,
  ui,
  category
});
