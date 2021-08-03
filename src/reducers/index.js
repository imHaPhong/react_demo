import { combineReducers } from "redux";
import { valueReducer } from "./valueReducer";

export const rootReducer = combineReducers({
    value: valueReducer
})
