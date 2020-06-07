import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import CountCtrolPanel from "./components/CountCtrolPanel";
import {Provider} from "react-redux";
import store from "./components/store"

ReactDOM.render(
  // <App />,
  <Provider store={store}>
    <CountCtrolPanel/>
  </Provider>,
  document.getElementById('root')
);
