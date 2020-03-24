import React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import Getprojects from "./ExpressProxy/Getprojects";
import { useParams } from "react-router-dom";

function ProjectList ({match}){
    
    const status = match.params.status;
    const dispatch = useDispatch();
    //dispatch to update state first
    dispatch(Getprojects());
    //then useSelector will fetch updated state
    const projects = useSelector(state => state.proj.projects);
    const [isExpanded, setExpanded] = useState(false);
    const projList = [];
    //const {status} = useParams();
    for (var i=0; i<projects.length; i++){
        if(projects[i].status === status){
            projList.push(projects[i]);
        }
    }
    
    function expand(){
        setExpanded(!isExpanded);
    }
    return(
    <div>
        {projList.map(project => (
                <div className="note">
                    <h1 onClick={expand} key={project._id}>{project.title}</h1>
                {isExpanded ?(
                    <div>
                    <p>{project.status}</p>
                    <p>{project.owner}</p>
                    </div>):null}
                
                </div>
            ))}
    </div>   
    );
}

export default ProjectList;