import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import logger from 'redux-logger';
import thunk from 'redux-thunk'
import createaSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/root-saga';

import rootReducer from "./root-reducer";

const sagaMiddleware = createaSagaMiddleware();

const middlewares = [logger, sagaMiddleware, thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);




