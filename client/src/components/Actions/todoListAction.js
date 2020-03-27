export function fetchListPending(){
    return {
        type: "FETCH_LIST_PENDING"
    }
}

export function fetchList(data){
   
    return {
            type: "FETCH_LIST_FULLFILLED", 
            payload: data
        }
}

export function fetchListFail(data){
    return {
        type: "FETCH_LIST_FAIL",
        payload: data
    }
}