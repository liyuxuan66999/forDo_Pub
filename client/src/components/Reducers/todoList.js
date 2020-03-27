const initialState = {
    pending: false,
    list: null,
    error: null

}
export default function projectReducer (state = initialState, action) {
    switch (action.type) {
        case "FETCH_LIST_PENDING":{
            return {...state, pending: true}
        }
        case "FETCH_LIST_FAIL":{
            return {...state, pending: false, error: action.payload}
        }
        
        case "FETCH_LIST_FULLFILLED":{
            return {...state, pending: false, list: action.payload}
        }
        default:
            return state;
    }
}