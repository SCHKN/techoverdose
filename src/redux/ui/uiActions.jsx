// Framework + Ecosystem selected
export const SET_FRAMEWORK_SELECTED = "SET_FRAMEWORK_SELECTED";
export const SET_ECOSYSTEM_SELECTED = "SET_ECOSYSTEM_SELECTED";

// Errors
export const ADD_ERROR = "ADD_ERROR";
export const RESET_ERROR = "RESET_ERROR";

// Filters
export const SET_FILTER = "SET_FILTER";
export const SET_DATASOURCE = "SET_DATASOURCE";

// Ecosystems
export const SHOW_ECOSYSTEMS = "SHOW_ECOSYSTEMS";
export const HIDE_ECOSYSTEMS = "HIDE_ECOSYSTEMS";

export const setFrameworkSelected = framework => {
  return {
    type: SET_FRAMEWORK_SELECTED,
    framework
  };
};

export const setEcosystemSelected = ecosystem => {
  return {
    type: SET_ECOSYSTEM_SELECTED,
    ecosystem
  };
};

export const addError = message => {
  return {
    type: ADD_ERROR,
    message
  };
};

export const resetError = () => {
  return {
    type: RESET_ERROR
  };
};

export const setFilter = filter => {
  return {
    type: SET_FILTER,
    filter
  };
};

export const setDatasource = datasource => {
  return {
    type: SET_DATASOURCE,
    datasource
  };
};

export const showEcosystems = () => {
  return {
    type: SHOW_ECOSYSTEMS
  };
};

export const hideEcosystems = () => {
  return {
    type: HIDE_ECOSYSTEMS
  };
};
