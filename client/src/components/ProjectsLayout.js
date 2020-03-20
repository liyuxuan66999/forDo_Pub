import React from "react";
import Getprojects from "./ExpressProxy/Getprojects";
import {useSelector, useDispatch} from "react-redux";

function ProjectsLayout (){
    const dispatch = useDispatch();
    dispatch(Getprojects());
    
    const projects = useSelector(state => state.proj.projects);
    return (<div>
        {projects.map(p => <li> {p.title} </li>)}
    </div>);
}

export default ProjectsLayout;