import React, { useState } from "react";
import ProjectCardDetail from "./ProjectCardDetail";



function CreateProjectCard(project){
    
    const proj = project;
    
    
    const projTitle = project.title;
    
        
    //when disable edit mode also set expand to be false to reload todolists
   
    function handleLearned(){
        console.log("Learned");
    }
   
    return(
        <ProjectCardDetail proj={proj} />
    );
    
}

export default CreateProjectCard;