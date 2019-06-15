import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppRouter from '../app/router/router';
ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);