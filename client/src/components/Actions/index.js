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
    // return function(dispatch){
    //     axios.get("/projects")
    //         .then((response) => {
    //             //const projects = response.data.json();
    //             dispatch({teype: "FETCH_PROJECTS_FULLFILLED", payload: response.data})
    //         })
    //         .catch((err) => {
    //             dispatch({type: "FETCH_PROJECTS_FAIL", payload: err})
    //         })
    // }
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

