import {
  requestRepos,
  fetchReposSuccess,
  addError,
  SET_CONFIG,
  REQUEST_REPOS,
  FETCH_REPOS_SUCCESS,
  ADD_ERROR,
  REQUEST_FRAMEWORKS,
  FETCH_FRAMEWORKS_SUCCESS,
  SET_FILTER,
  SET_DATASOURCE,
  requestFrameworks,
  fetchFrameworksSuccess,
  setFilter,
  setDatasource,
  SHOW_ECOSYSTEMS,
  HIDE_ECOSYSTEMS
} from "./repoActions";
import axios from "axios";
import { initialState, store } from "./../index";
import {
  getLowerBound,
  getUpperBound
} from "./../components/filtering/filterUtils";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONFIG:
      return {
        ...state,
        category: action.name,
        frameworkSelected: action.config.frameworkSelected,
        frameworks: action.config.frameworks
      };
    case REQUEST_REPOS:
      return {
        ...state,
        frameworkSelected: action.framework,
        ecosystemSelected: action.ecosystem,
        errors: [],
        frameworks: state.frameworks.map(e => {
          if (e.framework === action.framework) {
            e.repos = [];
            e.isRepoFetching = true;
          }
          return e;
        })
      };
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        frameworks: state.frameworks.map(e => {
          if (e.framework === action.framework) {
            e.repos = action.payload;
            e.isRepoFetching = false;
          }
          return e;
        })
      };
    case REQUEST_FRAMEWORKS:
      return {
        ...state,
        frameworks: state.frameworks.map(e => {
          if (e.framework === action.framework) {
            e.stars = 0;
            e.subscribers = 0;
            e.isFrameworkFetching = true;
          }
          return e;
        })
      };
    case FETCH_FRAMEWORKS_SUCCESS:
      return {
        ...state,
        frameworks: state.frameworks.map(e => {
          if (e.framework === action.framework) {
            e.stars = action.payload.stargazers_count;
            e.subscribers = action.payload.subscribers_count;
            e.isFrameworkFetching = false;
          }
          return e;
        })
      };
    case ADD_ERROR:
      return {
        ...state,
        errors: [...state.errors, action.message]
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

// Overloading reducers
export const fetchPosts = (framework, ecosystem) => {
  return dispatch => {
    const datasource = store.getState().dataSourceSelected;
    dispatch(requestRepos(framework, ecosystem));
    if (datasource === "github") {
      dispatch(fetchGithubPosts(framework, ecosystem));
    } else if (datasource === "reddit") {
      dispatch(
        fetchRedditPosts(framework, getCorrespondingSubreddit(framework))
      );
    }
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
    const filter = store.getState().filter;
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

export const setFilterAndFetchPosts = filter => {
  return dispatch => {
    dispatch(setFilter(filter));
    dispatch(
      fetchPosts(
        store.getState().frameworkSelected,
        store.getState().ecosystemSelected
      )
    );
  };
};

export const setDatasourceAndFetchPosts = datasource => {
  return dispatch => {
    dispatch(setDatasource(datasource));
    dispatch(
      fetchPosts(
        store.getState().frameworkSelected,
        store.getState().ecosystemSelected
      )
    );
  };
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
