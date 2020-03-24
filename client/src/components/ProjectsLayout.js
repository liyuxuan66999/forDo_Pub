import React, { useState } from "react";

import {Link} from "react-router-dom";
//import Link from '@material-ui/core/Link';

function ProjectsLayout (){
   
    //either use redirect and move fetch projects in redirect page or onclick to show/hide a list
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
            {/* {projects.map(project => (
                <div className="note">
                    <h1 onClick={expand}>{project.title}</h1>
                {isExpanded ?(
                    <div>
                    <p>{project.status}</p>
                    <p>{project.owner}</p>
                    </div>):null}
                
                </div>
            ))} */}
            
        </div>
    )
}

export default ProjectsLayout;