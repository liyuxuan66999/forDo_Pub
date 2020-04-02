import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import TodoItemDetail from "./TodoItemDetail";
import GetTodoList from '../../ExpressProxy/GetTodoList';
import InputArea from "./InputArea";

function TodoListLayout({match}){
    const [listItems, setItems] = useState([]);
    const [isExpanded, setExpanded] = useState(false);
    const list = useSelector(state => state.list.list);
    const items = list.items;
    //need to use hook for listing items
    

    const projTitle = match.params.projName;
    // const items = [];
    // for (var i=0; i<listItems.length; i++){
    //     if(listItems[i].name === projTitle){
    //         items.push(listItems[i]);
    //     }
    // }

   function loadToDoList(){
    if(items != null){
        setItems(items);
        setExpanded(!isExpanded);
    }
   }

   function addItem(inputText, setInputText){
        setItems(prevItems => {
            return [...prevItems, inputText];
        });
        setInputText("");
   }
    return(
        <div >
            <div className="box" id="heading" onClick={loadToDoList}>
                <h1 id="todoListH1">{projTitle}</h1>
            </div>
            {isExpanded ? (
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
                        <InputArea handleClick={addItem} />
                    </div>
            </div>
            ) : null}
            

        </div>
    )
}

export default TodoListLayout;