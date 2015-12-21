import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createApp from 'shared/components/app';
import reducer from 'client/reducer';
import { createStore } from 'redux';
import { tourInit } from 'shared/actions/tour';

import 'static/MorrisRoman-Black.ttf';

const store = createStore(reducer);

store.dispatch(tourInit([0, 0]));
const App = createApp(React);
const props = window.payload || {
  title: 'Default client title'
};

render(
  <Provider store={store}>
    <App { ...props } />
  </Provider>,
  document.getElementById('root')
);
