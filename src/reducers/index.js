import { combineReducers } from "redux";
import { valueReducer } from "./valueReducer";
import { todoItemReducer } from "./todoItemReducer";

export const rootReducer = combineReducers({
    value: valueReducer,
    todos: todoItemReducer 
})
