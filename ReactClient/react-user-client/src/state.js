import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import middlewarePromises from './middlewares/promises';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);

let createStoreWithMiddleware = applyMiddleware(middlewarePromises)(createStore);

const store = createStoreWithMiddleware(reducer, {
    users: []
});
window.store = store;

export default store;