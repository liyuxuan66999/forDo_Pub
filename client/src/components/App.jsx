import React from "react";

import Postregister from "./ExpressProxy/Postregister";
import Postlogin from "./ExpressProxy/Postlogin";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {useSelector, useDispatch} from "react-redux";
//import ProjectsLayout from "./AppLayout";
import ProjectsLayout from "./ProjectsLayout";
import ProjectList from "./ProjectList";

function App(){
    const isLoggedin = useSelector(state => state.auth);
    //option 1
    if(isLoggedin){
        return (
        <Router>
        <div>
            <Header />
            <Switch>  
            <Route path="/dashboard" exact component = {ProjectsLayout} />
            <Route path="/projects/:status" component ={ProjectList} />
            <Route component={ProjectsLayout} />
            </Switch>
            <Footer />
        </div>
        </Router>);
    }
    //

    //option 2
    //  if(isLoggedin){
    //      return (<ProjectsLayout />);
    //  }

    return (
    <Router>
    <div>
        <Header />  
            <Switch>
            <Route path="/" exact component={Postlogin}/>
            <Route path="/register" component={Postregister}/>
            <Route component={Postlogin} />
            </Switch>
            
            
        <Footer />
    </div>
    </Router>
    
    
    );
}

export default App;