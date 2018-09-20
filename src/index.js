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
  frameworkSelected: "vuejs",
  dataSourceSelected: "github",
  showEcosystems: false,
  filter: "year",
  errors: [],
  frameworks: [
    {
      framework: "react",
      isContender: false,
      // github specific
      organization: "facebook",
      officialRepoName: "react",
      ecosystem: ["redux", "react-native", "preact", "rxjs"],
      // reddit specific
      subredditName: "reactjs"
    },
    {
      framework: "angular",
      isContender: false,
      organization: "angular",
      officialRepoName: "angular",
      ecosystem: ["primeng"],
      subredditName: "angularjs"
    },
    {
      framework: "vuejs",
      isContender: false,
      organization: "vuejs",
      officialRepoName: "vue",
      ecosystem: ["nuxt"],
      subredditName: "vuejs"
    },
    {
      framework: "ember",
      isContender: false,
      organization: "emberjs",
      officialRepoName: "ember.js",
      subredditName: "emberjs"
    },
    {
      framework: "hyperapp",
      isContender: true,
      organization: "jorgebucaran",
      officialRepoName: "hyperapp",
      subredditName: "HyperApp"
    },
    {
      framework: "backbone",
      isContender: true,
      organization: "jashkenas",
      officialRepoName: "backbone",
      subredditName: "backbonejs"
    },
    {
      framework: "polymer",
      isContender: true,
      organization: "Polymer",
      officialRepoName: "polymer",
      subredditName: "polymerjs"
    },
    {
      framework: "bootstrap",
      isContender: true,
      organization: "twbs",
      officialRepoName: "bootstrap",
      subredditName: "bootstrap"
    },
    {
      framework: "sass",
      isContender: true,
      organization: "sass",
      officialRepoName: "sass",
      subredditName: "Sass"
    },
    {
      framework: "jquery",
      isContender: true,
      organization: "jquery",
      officialRepoName: "jquery",
      subredditName: "jquery"
    },
    {
      framework: "electron",
      isContender: true,
      organization: "electron",
      officialRepoName: "electron",
      subredditName: "electronjs"
    }
  ]
};

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));

initialState.frameworks
  .filter(t => !t.isContender)
  .map(f =>
    store.dispatch(
      fetchFrameworks(f.framework, f.organization, f.officialRepoName)
    )
  );

store.dispatch(fetchPosts(initialState.frameworks[2].framework));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
