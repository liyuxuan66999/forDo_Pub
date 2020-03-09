import React, {Component} from "react";
import Getprojects from "./ExpressProxy/Getprojects";
import Postregister from "./ExpressProxy/Postregister";
import Postlogin from "./ExpressProxy/Postlogin";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {useSelector} from "react-redux";



const isLoggedin = true;
function App(){
    const isLoggedin = useSelector(state => state.auth);
    const projects = useSelector(state => state.proj);
     if(isLoggedin){
         return (<Getprojects />);
     }

    return (
    <Router>
    <div>
        <Header />  
            <Switch>
            <Route path="/" exact component={Postlogin}/>
            <Route path="/register" component={Postregister}/>
            <Route component={Postlogin} />
            </Switch>
            <h1>{projects}</h1>
            
        <Footer />
    </div>
    </Router>
    
    
    );
}

export default App;