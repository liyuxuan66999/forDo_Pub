import {fetchListPending, fetchList, fetchListFail} from "../Actions/todoListAction";

function GetTodoList(listName){
    return dispatch => {
        dispatch(fetchListPending());
        
        const reqUrl = '/'+listName;
        return fetch (reqUrl)
        .then(res => res.json())
        .then(res => {
            
            if(res.error){
               
                throw(res.error);
            }
            const list = res;
            dispatch(fetchList(list));
            return list;
        })
        .catch(error => {
            dispatch(fetchListFail(error));
        })
    }
}

export default GetTodoList;