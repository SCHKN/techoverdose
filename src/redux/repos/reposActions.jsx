export const REQUEST_REPOS = "REQUEST_REPOS";
export const FETCH_REPOS_SUCCESS = "FETCH_REPOS_SUCCESS";
export const FETCH_REPOS_ERROR = "FETCH_REPOS_ERROR";

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
  