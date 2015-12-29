// redux provider
import { Provider } from 'react-redux';
// store
import createStore from 'client/store/dev';
// react
import React from 'react';
import { render } from 'react-dom';
// app component
import createApp from 'shared/components/app';
import DevTools from 'shared/containers/devTools';
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
    <div style={{flex: 1, display: 'flex'}}>
      <App { ...props } />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
