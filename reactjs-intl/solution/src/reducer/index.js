import { combineReducers } from 'redux'
import productReducer from './products'

const createReducer = combineReducers({productReducer});

export default createReducer;