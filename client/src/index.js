import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";
import "./index.css";
import reducers from "./redux/reducer";
const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
  );
