import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';

import GetTodoList from '../ExpressProxy/GetTodoList';
import {useSelector, useDispatch} from "react-redux";

import ProjectCardDetail from "./ProjectCardDetail";



function CreateProjectCard(project){
    const redirectURL = '/todolist/' + project.title;
    const dispatch = useDispatch();
    const [isExpanded, setExpanded] = useState(false);
    const [isEditing, setEditMode] = useState(false);
    const list = useSelector(state => state.list.list);
    const projTitle = project.title;
    function handleToDo(){
        if(list===null || list.name != projTitle){
            dispatch(GetTodoList(projTitle));
        }
        
        setExpanded(!isExpanded);
       
    }
    function handleLearned(){
        console.log("Learned");
    }
    
    return(
        <ProjectCardDetail 
            clickEvent={handleToDo}
            proj={project}
            url={redirectURL} 
            expand={isExpanded}/>
    );
    
}

export default CreateProjectCard;