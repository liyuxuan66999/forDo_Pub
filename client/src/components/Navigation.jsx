import React from "react";
import "./css/App.css";

function Navigation(){
    return(
        <nav>
            <ul className="nav-links">
                <li> ToDo </li>
                <li> Analyzed </li>
                <li> Auditor Review </li>
                <li> Legal Review </li>
                <li> Debug </li>
                <li> Closed </li>
            </ul>
        </nav>
    );
}

export default Navigation;
