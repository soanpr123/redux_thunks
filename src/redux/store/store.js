import {applyMiddleware, createStore, Middleware} from 'redux';
import {peopleReducer} from '../reducers/peopleReducers';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
const middleware = [thunk];
export const store = createStore(peopleReducer, applyMiddleware(...middleware));
