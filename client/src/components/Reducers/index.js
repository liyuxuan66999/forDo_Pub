import authReducer from "./authentication";
import projReducer from "./projects";
import todoListReducer from "./todoList";
import {combineReducers} from "redux";


export default combineReducers({
    auth: authReducer,
    proj: projReducer,
    list: todoListReducer
});

