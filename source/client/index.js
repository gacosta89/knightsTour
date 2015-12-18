import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createApp from 'shared/components/app';
import { createStore } from 'redux';
import { reducer } from 'shared/reducers/tour';
import { tourInit } from 'shared/actions/tour';

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
