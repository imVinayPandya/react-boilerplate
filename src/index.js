import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import './styles/styles.scss';

const jsx = (
  <BrowserRouter>
    <div>
      {renderRoutes(Routes)}
    </div>
  </BrowserRouter>
);

ReactDOM.render(jsx, document.getElementById('app'));
