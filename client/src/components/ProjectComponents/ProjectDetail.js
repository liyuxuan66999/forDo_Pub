import React from "react";

function ProjectDetail (props){
    return(<div className="top">
        <div>
            <h1>Status:</h1>
            <p>{props.status}</p>
        </div>
        <div>
            <h1>Owner:</h1>
            <p>{props.owner}</p>
        </div>
        </div>)
}

export default ProjectDetail;