import { createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";
import { createLogger } from 'redux-logger'

import callAPI from './helpers/callAPIMiddleware'

const middleware = applyMiddleware(thunkMiddleware, callAPI, createLogger())

const store =  createStore(rootReducer, middleware);


export default store;