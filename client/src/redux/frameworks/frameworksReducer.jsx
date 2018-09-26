import {
  REQUEST_FRAMEWORKS,
  FETCH_FRAMEWORKS_SUCCESS,
  SET_FRAMEWORKS
} from "./frameworksActions";
import { requestFrameworks, fetchFrameworksSuccess } from "./frameworksActions";
import { addError } from "./../ui/uiActions";
import axios from "axios"

const frameworks = (state = [], action) => {
  switch (action.type) {
    case SET_FRAMEWORKS:
      return action.frameworks;
    case REQUEST_FRAMEWORKS:
      return state.map(e => {
        if (e.framework === action.framework) {
          e.stars = 0;
          e.subscribers = 0;
          e.isFrameworkFetching = true;
        }
        return e;
      });

    case FETCH_FRAMEWORKS_SUCCESS:
      return state.map(e => {
        if (e.framework === action.framework) {
          e.stars = action.payload.stargazers_count;
          e.subscribers = action.payload.subscribers_count;
          e.isFrameworkFetching = false;
        }
        return e;
      });

    default:
      return state;
  }
};

export const fetchFrameworks = (framework, organization, officialRepoName) => {
  return dispatch => {
    dispatch(requestFrameworks(framework));
    axios
      .get(`https://api.github.com/repos/${organization}/${officialRepoName}`)
      .then(response =>
        dispatch(fetchFrameworksSuccess(response.data, framework))
      )
      .catch(err => dispatch(addError(err.response.data.message)));
  };
};

export default frameworks;
