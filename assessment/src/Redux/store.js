import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as DetailsReducer } from "./DetailsReducer/reducer";
import {reducer as HeadReducer} from "./HeadReducer/reducer"
import thunk from 'redux-thunk'
let middleware=[thunk]
let rootReucer=combineReducers({DetailsReducer,HeadReducer})
export const store=legacy_createStore(rootReucer,applyMiddleware(...middleware))