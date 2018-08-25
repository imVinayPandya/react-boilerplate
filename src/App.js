import React from 'react';
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => (
  <div>Home page{renderRoutes(route.routes)}</div>
);
export default App;
