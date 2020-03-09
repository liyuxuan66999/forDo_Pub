import authReducer from "./authentication";
import projReducer from "./projects";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    auth: authReducer,
    proj: projReducer
});

export default allReducers;
