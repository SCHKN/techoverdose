import { requestRepos, fetchReposSuccess } from "./reposActions";
import { REQUEST_REPOS, FETCH_REPOS_SUCCESS } from "./reposActions";
import { store } from "../../index";
import axios from "axios";
import {
  getLowerBound,
  getUpperBound
} from "./../../components/filtering/filterUtils";
import {
  addError,
  setFrameworkSelected,
  setEcosystemSelected,
  resetError
} from "./../ui/uiActions";

const initialState = {
  items: [],
  fetching: false
};

const repos = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_REPOS:
      return {
        ...state,
        items: [],
        fetching: true
      };
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        fetching: false
      };
    default:
      return state;
  }
};

export const fetchPosts = (framework, ecosystem) => {
  return dispatch => {
    const datasource = store.getState().ui.dataSourceSelected;
    dispatch(setUI(framework, ecosystem));
    dispatch(requestRepos(framework, ecosystem));
    if (datasource === "github") {
      dispatch(fetchGithubPosts(framework, ecosystem));
    } else if (datasource === "reddit") {
      dispatch(
        fetchRedditPosts(framework, getCorrespondingSubreddit(framework))
      );
    } else if (datasource === "snippets") {
      dispatch(fetchSnippets(framework));
    }
  };
};

const fetchSnippets = (framework) => {
  return dispatch => {
    const file = require("../../snippets/" + framework + ".js");
    dispatch(fetchReposSuccess(file.default.data, framework));
  };
};

const setUI = (framework, ecosystem) => {
  return dispatch => {
    dispatch(setFrameworkSelected(framework));
    dispatch(resetError());
    dispatch(setEcosystemSelected(ecosystem));
  };
};

const getCorrespondingSubreddit = framework => {
  const matchingItem = store.getState().frameworks.find(p => {
    if (p.framework === framework) {
      return p;
    }
  });
  return matchingItem.subredditName;
};

const fetchGithubPosts = (framework, ecosystem) => {
  return dispatch => {
    const filter = store.getState().ui.filter;
    axios
      .get(
        `https://api.github.com/search/repositories?q=topic:${
          ecosystem ? ecosystem : framework
        }+created:${getLowerBound(filter)}..${getUpperBound(
          filter
        )}&sort=stars&order=desc`
      )
      .then(response =>
        dispatch(fetchReposSuccess(response.data.items, framework))
      )
      .catch(err => dispatch(addError(err.response.data.message)));
  };
};

const fetchRedditPosts = (framework, subreddit) => {
  return dispatch => {
    axios
      .get(`https://www.reddit.com/r/${subreddit}/top.json?limit=20`)
      .then(response =>
        dispatch(fetchReposSuccess(response.data.data.children, framework))
      )
      .catch(err =>
        dispatch(
          addError("No subreddit were found for this tech. Or Reddit is down.")
        )
      );
  };
};

export default repos;
