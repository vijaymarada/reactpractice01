import Reducer  from "./Reducer";
import {createStore,applyMiddleware } from 'redux';
import {apiMiddleware} from './MiddlewareRedux'

const store = createStore(Reducer, applyMiddleware(apiMiddleware))

export default  store