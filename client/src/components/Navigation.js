import React from "react";
import {Link} from "react-router-dom";

function Navigation(){
    const navStyle = {
        color: 'white'
    };

    return (
        <nav >
            
            <ul className="nav-links">
                <Link style={navStyle} to={"/dashboard"}>
                <li>Dashboard</li>
                </Link>

                <Link style={navStyle} to={"/projects/Q"}>
                <li>Report</li>
                </Link>
                
                <Link style={navStyle} to={"/projects/A"}>
                <li>About</li>
                </Link>
                
                <Link style={navStyle} to={"/newproj"}>
                <li>Create Project</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navigation;