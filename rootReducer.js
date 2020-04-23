import {combineReducers,createStore,applyMiddleware} from 'redux'
import data_Reducer from './Data_Service/reducer'
import authenticate_Reducer from './Services/reducer'

import thunk from 'redux-thunk'

const reducer= combineReducers({authenticate_Reducer,data_Reducer})

const store= createStore(reducer,applyMiddleware(thunk))
export default store