import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const middlewares = [logger, thunk, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
