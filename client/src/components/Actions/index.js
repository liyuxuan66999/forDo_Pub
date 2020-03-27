//import axios from "axios";

export const loggedin = () => {
    return {
        type: 'LOGIN'
    }
}
export function fetchProjectsPending(){
    return {
        type: "FETCH_PROJECTS_PENDING"
    }
}

export function fetchProjects(data){
   
    return {
            type: "FETCH_PROJECTS_FULLFILLED", 
            payload: data
        }
}

export function fetchProjectsFail(data){
    return {
        type: "FETCH_PROJECTS_FAIL",
        payload: data
    }
}

