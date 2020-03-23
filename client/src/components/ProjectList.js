import React, { useState } from "react";

function ProjectList (props){
    const [isExpanded, setExpanded] = useState(false);
    const projects = props.projects;
    function expand(){
        setExpanded(!isExpanded);
    }
    return(
    <div>
        {projects.map(project => (
                <div className="note">
                    <h1 onClick={expand}>{project.title}</h1>
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