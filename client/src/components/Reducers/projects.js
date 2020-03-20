const initialState = {
    pending: false,
    projects: [],
    error: null

}
export default function projectReducer (state = initialState, action) {
    switch (action.type) {
        case "FETCH_PROJECTS_PENDING":{
            return {...state, pending: true}
        }
        case "FETCH_PROJECTS_FAIL":{
            return {...state, pending: false, error: action.payload}
        }
        
        case "FETCH_PROJECTS_FULLFILLED":{
            return {...state, pending: false, projects: action.payload}
        }
        default:
            return state;
    }
}

export const getProjects = state => state.projects;
export const getProjectsPending = state => state.pending;
export const getProjectsError = state => state.error;