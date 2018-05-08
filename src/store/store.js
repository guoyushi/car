//创建store容器
import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger'
import reducer from './reducer.js'
let store=createStore(reducer,applyMiddleware(logger))
export default store;