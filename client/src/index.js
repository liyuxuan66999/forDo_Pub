import React from 'react';
import ReactDOM from 'react-dom';
import store from "./components/store";
import { Provider } from "react-redux";
//import AppLayout from "./components/AppLayout";
import App from "./components/App";

//STORE -> GLOBALIZED STATE
//try to add another reducer and test redux dev-tool
// const store = createStore(
//     allReducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );




ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));


