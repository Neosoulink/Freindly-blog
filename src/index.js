import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// STORE
import store from './store';

// ROUTER
import Router from './router';

//
import * as serviceWorker from './utils/serviceWorker';

// STYLES
import './assets/css/index.css';
import "./assets/scss/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
			<Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
