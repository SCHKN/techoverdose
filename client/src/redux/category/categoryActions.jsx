// Configuration
export const SET_CONFIG = "SET_CONFIG";
export const SET_CATEGORY = "SET_CATEGORY";
export const RESET_STATE = "RESET_STATE";

// Actions creators
export const setConfig = (name) => {
  return {
    type: SET_CONFIG,
    name
  };
};

export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    category
  }
}

export const resetState = () => {
  return {
    type: RESET_STATE
  }
}