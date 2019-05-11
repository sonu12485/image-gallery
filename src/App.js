import React, { Component } from "react";

import Gallery from "./components/Gallery";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";

import rootSaga from "./sagas";

import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Gallery />
      </Provider>
    );
  }
}

export default App;
