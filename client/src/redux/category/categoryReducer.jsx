import { RESET_STATE, SET_CONFIG, SET_CATEGORY } from "./categoryActions";
import { resetState, setCategory } from "./categoryActions";
import { loadJSON } from "../../common/jsonUtil";
import { initializeApp } from "../../index";
import { store } from "../../index";
import { setFrameworks } from "../frameworks/frameworksActions";
import { setFrameworkSelected, setFilter } from "./../ui/uiActions";

export const category = (state = "front", action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return action.category;
    default:
      return state;
  }
};

export const setCategoryAndFetchAll = category => {
  return dispatch => {
    dispatch(setFrameworks([]));
    dispatch(setFrameworkSelected(""));
    dispatch(setCategory(category));
    loadJSON(store.getState().category, initializeApp);
  };
};

export default category;
