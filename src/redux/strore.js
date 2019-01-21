/**
 * @providesModule ReduxStore
 */

import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {
    loader
} from './reducers';

const store = createStore(
    combineReducers({
        loader
    }),
    undefined,
    compose(applyMiddleware(thunk))
);

export default store;