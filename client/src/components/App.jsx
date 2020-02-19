import React, {Component} from "react";
import Getprojects from "./ExpressProxy/Getprojects";
import Postregister from "./ExpressProxy/Postregister";
import Postlogin from "./ExpressProxy/Postlogin";
import Header from "./Header";
import Footer from "./Footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
const isLoggedin = false;
function App(){
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
        </Switch>
        <Footer />
    </div>
    </Router>
    
    
    );
}

export default App;