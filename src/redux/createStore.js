import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

export const middleWare = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleWare));

export default store;
