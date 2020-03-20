import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./Reducers";
import {createLogger} from "redux-logger";
//import {createPromise} from "redux-promise-middleware";
//import {logger} from "redux-logger";

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducer, middleware);
export default store;