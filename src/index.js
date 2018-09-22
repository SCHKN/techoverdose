import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./assets/vendors/animate.css";
import "./index.css";
import "./assets/styles/responsive.css";
import App from "./App";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import registerServiceWorker from "./registerServiceWorker";
import { reducer, fetchPosts, fetchFrameworks } from "./redux/repoReducers";
import { loadJSON } from "./common/jsonUtil";
import { setConfig } from "./redux/repoActions";

// State should look like

// const state = {
//    frameworkSelected: 'react',
//    ecosystemSelected: 'redux',
//    showEcosystems: 'false',
//    filter: 'day',
//    [
//    {
//     framework: 'react',
//     stars: 3,
//     subscribers: 0,
//     isFrameworkFetching: true,
//     isRepoFetching: true
//     repos: [
//       repo1,
//       repo2
//     ],
//    ecosystem: ["redux", "react-native", "styled-components"]
//   },
//   {
//     framework: 'angular',
//     stars: 4,
//     subscribers: 23,
//     isFrameworkFetching: true,
//     isRepoFetching: false
//     repos: [
//       repo1,
//       repo2
//     ]
//   }
// ]
// }

export const initialState = {
  category: "ml",
  dataSourceSelected: "github",
  showEcosystems: false,
  filter: "year",
  errors: [],
  frameworks: [],
  frameworkSelected: ""
};

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export const initializeApp = json => {
  store.dispatch(setConfig(JSON.parse(json), store.getState().category));
  store
    .getState()
    .frameworks.filter(t => !t.isContender)
    .map(f =>
      store.dispatch(
        fetchFrameworks(f.framework, f.organization, f.officialRepoName)
      )
    );
  store.dispatch(fetchPosts(store.getState().frameworkSelected));
};

loadJSON(store.getState().category, initializeApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
