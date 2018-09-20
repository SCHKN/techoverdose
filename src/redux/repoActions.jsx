// Configuration
export const SET_CONFIG = "SET_CONFIG";
// Repository fetching
export const REQUEST_REPOS = "REQUEST_REPOS";
export const FETCH_REPOS_SUCCESS = "FETCH_REPOS_SUCCESS";
export const FETCH_REPOS_ERROR = "FETCH_REPOS_ERROR";
// Framework Fetching
export const REQUEST_FRAMEWORKS = "REQUEST_FRAMEWORKS";
export const FETCH_FRAMEWORKS_SUCCESS = "FETCH_FRAMEWORKS_SUCCESS";
export const ADD_ERROR = "ADD_ERROR";
// Filters
export const SET_FILTER = "SET_FILTER";
export const SET_DATASOURCE = "SET_DATASOURCE";
// Ecosystems
export const SHOW_ECOSYSTEMS = "SHOW_ECOSYSTEMS";
export const HIDE_ECOSYSTEMS = "HIDE_ECOSYSTEMS";

// Actions creators
export const setConfig = (config, name) => {
  return {
    type: SET_CONFIG,
    config,
    name
  };
};

export const requestRepos = (framework, ecosystem) => {
  return {
    type: REQUEST_REPOS,
    framework,
    ecosystem
  };
};

export const fetchReposSuccess = (json, framework) => {
  return {
    type: FETCH_REPOS_SUCCESS,
    payload: json,
    framework
  };
};

export const requestFrameworks = framework => {
  return {
    type: REQUEST_FRAMEWORKS,
    framework
  };
};

export const fetchFrameworksSuccess = (json, framework) => {
  return {
    type: FETCH_FRAMEWORKS_SUCCESS,
    payload: json,
    framework
  };
};

export const addError = message => {
  return {
    type: ADD_ERROR,
    message
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
