import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import TodoItemDetail from "./TodoItemDetail";
import GetTodoList from '../../ExpressProxy/GetTodoList';

function TodoListLayout({match}){
    const list = useSelector(state => state.list.list);
    const listItems = list.items;
    //const [items, setItems] = useState([]);
    const projTitle = match.params.projName;
    // if(list.items != null){
    //     setItems(list.items);
    // }
    // const items = [];
    // for (var i=0; i<listItems.length; i++){
    //     if(listItems[i].name === projTitle){
    //         items.push(listItems[i]);
    //     }
    // }

   
    return(
        <div >
            <div className="box" id="heading">
                <h1 id="todoListH1">{projTitle}</h1>
            </div>
            <div className="box">
                <div>                
                    <ul>
                    {listItems.map((TodoItem, index) => (
                        <TodoItemDetail 
                            id = {index} 
                            item = {TodoItem}
                            />
                    ))}
                    </ul>
                </div>
                <div className="item">
                    <input type="text" id="todoList" placeholder="New Item"></input>
                    <button id="addButton"> + </button> 
                </div>
            </div>

        </div>
    )
}

export default TodoListLayout;