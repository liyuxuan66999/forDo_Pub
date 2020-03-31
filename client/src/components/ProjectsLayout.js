import React, { useState } from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import Getprojects from "./ExpressProxy/Getprojects";
//import Link from '@material-ui/core/Link';

function ProjectsLayout (){
    //const dispatch = useDispatch();
    //onclick envent will only trigger dispatch once so that program will not hang there
    return(
        <div>
            <div id = "todo">
                <div className="tile">
                <Link className="Link" to={'/projects/Q'} > 
                    Todo 
                </Link>
                </div>
            </div>
            <div id = "legalreview">
                <div className="tile">
                <Link className="Link" to={"/projects/L"} >
                    Legal Review
                </Link>
                </div>
             </div>
             <div id = "debug">
                <div className="tile">
                <Link className="Link" to={"/projects/D"} >
                    Debug
                </Link>
                </div>
             </div>
             <div id = "auditorreview">
                <div className="tile">
                <Link className="Link" to={"/projects/R"} >
                    Auditor Review
                </Link>
                </div>
             </div> 
             <div id = "closed">
                <div className="tile">
                <Link className="Link" to={"/projects/C"} >
                    Closed
                </Link>
                </div>
             </div> 
            
            
        </div>
    )
}

export default ProjectsLayout;