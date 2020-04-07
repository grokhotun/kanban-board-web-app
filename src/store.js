import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import {rootReducer} from './reducers/panel';

export default () => {
    const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
};
