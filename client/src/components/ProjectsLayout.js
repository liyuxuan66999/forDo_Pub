import React, { useState } from "react";
import Getprojects from "./ExpressProxy/Getprojects";
import {useSelector, useDispatch} from "react-redux";
import Link from '@material-ui/core/Link';
import ProjectList from "./ProjectList";

function ProjectsLayout (){
    const dispatch = useDispatch();
    //dispatch to update state first
    dispatch(Getprojects());
    //then useSelector will fetch updated state
    const projects = useSelector(state => state.proj.projects);
    const [isExpanded, setExpanded] = useState(false);
    const todoList = [];
    for (var i=0; i<projects.length; i++){
        if(projects[i].status === "Q"){
            todoList.push(projects[i]);
        }
    }
    
    function expand(){
        setExpanded(!isExpanded);
    }
    //either use redirect and move fetch projects in redirect page or onclick to show/hide a list
    return(
        <div>
            <div id = "todo" onClick={
                () => {
                    
                }
            }>
                <div className="tile">
                    <h1> Todo </h1>
                </div>
            </div>
            <div id = "legalreview">
                <div className="tile">
                <Link className="Link" href="/projects" >
                Legal Review
                </Link>
                </div>
             </div>
             <div id = "debug">
                <div className="tile">
                    <h1>Debug</h1>
                </div>
             </div>
             <div id = "auditorreview">
                <div className="tile">
                    <h1>Auditor Review</h1>
                </div>
             </div> 
             <div id = "closed">
                <div className="tile">
                    <h1>Closed</h1>
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