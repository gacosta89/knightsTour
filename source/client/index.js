import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createApp from 'shared/components/app';
import reducer from 'client/reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import synchronizeExecTourImp from 'shared/middleware/synchronizeExecTourImp';
import { tourInit } from 'shared/actions/tour';
import { impSolutionFactory } from 'shared/actions/import';
import transpileFactory from 'client/util/transpile';
import codepenFactory from 'shared/util/codepen';

import 'static/MorrisRoman-Black.ttf';

const codepen = codepenFactory(),
  transpile = transpileFactory({url: '/transpile'}),
  impSolution = impSolutionFactory({codepen, transpile});

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  synchronizeExecTourImp
)(createStore),
  store = createStoreWithMiddleware(reducer);

store.dispatch(tourInit([0, 0]));
const App = createApp({React, impSolution});
const props = window.payload || {
  title: 'Default client title'
};

render(
  <Provider store={store}>
    <App { ...props } />
  </Provider>,
  document.getElementById('root')
);
