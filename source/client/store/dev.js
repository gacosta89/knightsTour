// redux
import { createStore, applyMiddleware, compose } from 'redux';
// reducer
import reducer from 'client/reducer';
//middleware
import thunk from 'redux-thunk';
import synchronizeExecTourImp from 'shared/middleware/synchronizeExecTourImp';
import DevTools from 'shared/containers/devTools';

const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunk,
    synchronizeExecTourImp
  ),
  DevTools.instrument()
)(createStore);

export default initialState => {
  const store = createStoreWithMiddleware(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('client/reducer', () => {
      const nextReducer = require('client/reducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
