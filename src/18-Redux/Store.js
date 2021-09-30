import Reducer from "./Reducer";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from './MiddlewareRedux'
import Middleware from '../19-ReduxFrom//Middleware'
import ReducerForm from '../19-ReduxFrom/ReducerForm'


const store = createStore(combineReducers({ Reducer, ReducerForm }), applyMiddleware(apiMiddleware, Middleware))

export default store