import React, { useState, useEffect } from 'react';
import GetprojectsProx from "../GetprojectsProx";

function Getprojects(){
    useEffect(() => {
        fetchProjects();
    }, []);

    const [projects, setProj] = useState([]);
    const [isExpanded, setExpanded] = useState(false);

    const fetchProjects = async() => {
        const data = await fetch('/projects');
        const projects = await data.json();
        //console.log(projects);
        setProj(projects);
    };
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
    )
}



export default Getprojects;