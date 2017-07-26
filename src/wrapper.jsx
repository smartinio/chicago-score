import { Provider } from 'react-redux';
import React from 'react';
import store from './store';

export default function (App) {
  return { app: <Provider store={store}><App /></Provider>, root: document.getElementById('root') };
}
