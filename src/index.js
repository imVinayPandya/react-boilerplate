import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import axios from 'axios';
import rootReducer from './rootReducer';
import Routes from './Routes';

import 'react-overlay-loader/styles.css';
import './styles/styles.scss';
import { userLoggedIn } from './actions/auth';
import { changeNavTitle } from './actions/common';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.token) {
  const user = { token: localStorage.token };
  store.dispatch(userLoggedIn(user));
  store.dispatch(changeNavTitle({ notificationCount: Math.round(Math.random() * 100) }));
}

const jsx = (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        {renderRoutes(Routes)}
      </div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
