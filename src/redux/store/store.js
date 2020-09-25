import {applyMiddleware, createStore, Middleware} from 'redux';
import {peopleReducer} from '../reducers/peopleReducers';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export const store = createStore(peopleReducer, applyMiddleware(...middleware));
