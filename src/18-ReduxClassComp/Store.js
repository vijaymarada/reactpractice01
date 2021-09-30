import Reducer from "./Reducer";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from './MiddlewareRedux'
import Middleware from '../19-ReduxFromClassComp/Middleware'
import ReducerForm from '../19-ReduxFromClassComp/ReducerForm'
import FnAppReducer from '../20-ReduxFunctionComp/FnAppReducer'
import FnAppMiddleware from '../20-ReduxFunctionComp/FnAppMiddleware'



const store = createStore(
    combineReducers({ Reducer, ReducerForm, FnAppReducer }),
applyMiddleware(apiMiddleware, Middleware, FnAppMiddleware))

export default store