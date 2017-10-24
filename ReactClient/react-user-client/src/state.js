import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import { apiMiddleware } from 'redux-api-middleware';
import usersReducer from './reducers';

const reducer = combineReducers({
    users: usersReducer
});
const createStoreWithMiddleware = applyMiddleware(apiMiddleware, logger)(createStore);

const store = createStoreWithMiddleware(reducer, {
    users: []
});
window.store = store;

export default store;