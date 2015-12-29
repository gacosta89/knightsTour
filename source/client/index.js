// redux provider
import { Provider } from 'react-redux';
// store
import createStore from 'client/store';
// react
import React from 'react';
import { render } from 'react-dom';
// app component
import createApp from 'shared/components/app';
// actions
import { impSolutionFactory } from 'shared/actions/import';
// services
import codepenFactory from 'shared/util/codepen';

import 'static/MorrisRoman-Black.ttf';

const store = createStore(),
  codepen = codepenFactory(),
  impSolution = impSolutionFactory(codepen);

const App = createApp({impSolution});
const props = window.payload || {
  title: 'Default client title'
};

render(
  <Provider store={store}>
    <App { ...props } />
  </Provider>,
  document.getElementById('root')
);
