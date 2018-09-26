export const REQUEST_FRAMEWORKS = "REQUEST_FRAMEWORKS";
export const FETCH_FRAMEWORKS_SUCCESS = "FETCH_FRAMEWORKS_SUCCESS";
export const SET_FRAMEWORKS = "SET_FRAMEWORKS";

export const setFrameworks = frameworks => {
  return {
    type: SET_FRAMEWORKS,
    frameworks
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
