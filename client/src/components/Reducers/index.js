import authReducer from "./authentication";
import projReducer from "./projects";
import {combineReducers} from "redux";

export default combineReducers({
    auth: authReducer,
    proj: projReducer
});

