import React, { useEffect } from 'react';
// import GetprojectsProx from "../GetprojectsProx";
import {fetchProjectsPending, fetchProjects, fetchProjectsFail} from "../Actions";

function Getprojects(){
    // useEffect(() => {
    //     fetchProjects();
    // }, []);

    // const [projects, setProj] = useState([]);
    // const [isExpanded, setExpanded] = useState(false);

    // const fetchProjects = async() => {
    //     const data = await fetch('/projects');
    //     const projects = await data.json();
    //     //console.log(projects);
    //     setProj(projects);
    // };
    

     //useEffect(() => {
       return dispatch => {
            dispatch(fetchProjectsPending());
            return fetch ('/projects')
            .then(res => res.json())
            .then(res => {
                if(res.error){
                    throw(res.error);
                }
                const projects = res;
                dispatch(fetchProjects(projects));
                return projects;
            })
            .catch(error => {
                dispatch(fetchProjectsFail(error));
            })
        }
     //}, []); 
     
  
}



export default Getprojects;