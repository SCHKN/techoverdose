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
import { fetchPosts } from "./redux/repos/reposReducer";
import { loadJSON } from "./common/jsonUtil";
import rootReducer from "./redux/rootReducer";
import { setFrameworkSelected } from "./redux/ui/uiActions";
import { setFrameworks } from "./redux/frameworks/frameworksActions";
import { fetchFrameworks } from './redux/frameworks/frameworksReducer'
import { setCategory } from './redux/category/categoryActions';

// State should look like

// const state = {
//   category: "front",
//   ui: {
//     frameworkSelected: "react",
//     ecosystemSelected: "redux",
//     showEcosystems: "false",
//     filter: "day",
//     dataSourceSelected: "github",
//     errors: [],
//   },
//   frameworks: [
//     {
//       framework: "react",
//       stars: 3,
//       subscribers: 0,
//       isFrameworkFetching: true,
//       ecosystem: ["redux", "react-native", "styled-components"]
//     },
//     {
//       framework: "angular",
//       stars: 4,
//       subscribers: 23,
//       isFrameworkFetching: true
//     }
//   ],
//   repos: {
//     fetching: false,
//     items: []
//   }
// };

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export const initializeApp = json => {
  const config = JSON.parse(json);
  store.dispatch(setFrameworkSelected(config.frameworkSelected));
  store.dispatch(setFrameworks(config.frameworks));
  store.dispatch(setCategory(store.getState().category));
  store
    .getState()
    .frameworks.filter(t => !t.isContender)
    .map(f =>
      store.dispatch(
        fetchFrameworks(f.framework, f.organization, f.officialRepoName)
      )
    );
  store.dispatch(fetchPosts(store.getState().ui.frameworkSelected));
};

loadJSON(store.getState().category, initializeApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
