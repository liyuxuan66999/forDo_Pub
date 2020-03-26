import React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux";

import CreateProjectCard from "./ProjectComponents/CreateProjectCard";

function ProjectList ({match}){
    
    const status = match.params.status;
    
    //then useSelector will fetch updated state
    const projects = useSelector(state => state.proj.projects);
    //const [isExpanded, setExpanded] = useState(false);
    const projList = [];
    //const {status} = useParams();
    for (var i=0; i<projects.length; i++){
        if(projects[i].status === status){
            projList.push(projects[i]);
        }
    }
    
    
    return(
    <div>
        {projList.map(CreateProjectCard)}
    </div>   
    );
}

export default ProjectList;