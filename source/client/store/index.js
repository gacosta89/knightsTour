// redux
import { createStore, applyMiddleware } from 'redux';
// reducer
import reducer from 'client/reducer';
//middleware
import thunk from 'redux-thunk';
import synchronizeExecTourImp from 'shared/middleware/synchronizeExecTourImp';

const createStoreWithMiddleware = applyMiddleware(
    thunk,
    synchronizeExecTourImp
)(createStore);

export default initialState => createStoreWithMiddleware(reducer, initialState);
