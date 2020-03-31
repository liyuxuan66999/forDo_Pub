import React from "react";

function TodoItemDetail(props){
    return (
        <div className="item">
            <input type="checkbox" name="chkbx"></input>
            <p>{props.item}</p> 
        </div>    
    );
}

export default TodoItemDetail;