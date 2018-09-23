import {
  ADD_ERROR,
  SET_FILTER,
  SET_DATASOURCE,
  SET_FRAMEWORK_SELECTED,
  SET_ECOSYSTEM_SELECTED,
  SHOW_ECOSYSTEMS,
  HIDE_ECOSYSTEMS,
  RESET_ERROR
} from "./uiActions";
import { setFilter, setDatasource } from "./uiActions";
import { fetchPosts } from "../repos/reposReducer";
import { store } from "../../index";

const initialState = {
  dataSourceSelected: "github",
  showEcosystems: false,
  filter: "year",
  errors: [],
  frameworkSelected: "",
  ecosystemSelected: ""
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return {
        ...state,
        errors: [...state.errors, action.message]
      };
    case RESET_ERROR: {
      return {
        ...state,
        errors: []
      };
    }
    case SET_FRAMEWORK_SELECTED:
      return {
        ...state,
        frameworkSelected: action.framework
      };
    case SET_ECOSYSTEM_SELECTED:
      return {
        ...state,
        ecosystemSelected: action.ecosystem
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter
      };
    case SET_DATASOURCE:
      return {
        ...state,
        dataSourceSelected: action.datasource
      };
    case SHOW_ECOSYSTEMS:
      return {
        ...state,
        showEcosystems: true
      };
    case HIDE_ECOSYSTEMS:
      return {
        ...state,
        showEcosystems: false
      };
    default:
      return state;
  }
};

export const setFilterAndFetchPosts = filter => {
  return dispatch => {
    dispatch(setFilter(filter));
    dispatch(
      fetchPosts(
        store.getState().ui.frameworkSelected,
        store.getState().ui.ecosystemSelected
      )
    );
  };
};

export const setDatasourceAndFetchPosts = datasource => {
  return dispatch => {
    dispatch(setDatasource(datasource));
    dispatch(
      fetchPosts(
        store.getState().ui.frameworkSelected,
        store.getState().ui.ecosystemSelected
      )
    );
  };
};

export default ui;
