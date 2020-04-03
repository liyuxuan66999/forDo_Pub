import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import TodoItemDetail from "./TodoItemDetail";
import GetTodoList from '../../ExpressProxy/GetTodoList';
import InputArea from "./InputArea";
import handlePostAction from "../../ExpressProxy/PostList";


function TodoListLayout({match}){
    const [listItems, setItems] = useState([]);
    const [isExpanded, setExpanded] = useState(false);
    const list = useSelector(state => state.list.list);
    var items = list.items;
    const projTitle = match.params.projName;
    const dispatch = useDispatch();
    // const newItem = {name: projTitle, item: ""};
    // const poststate = { post: newItem, resToPost:""};
  
    
   function loadToDoList(){
    //dispatch(GetTodoList(projTitle));
    //items = list.items;
    if(items != null && items.length>listItems.length){
        
        setItems(items);

    }
   }

   function handleExpend(){
        loadToDoList();
        setExpanded(!isExpanded);
   }

   function addItem(inputText, setInputText){
        setItems(prevItems => {
            return [...prevItems, inputText];
        });
        const res = handlePostAction(inputText, projTitle);
        //loadToDoList();
        setInputText("");
   }

    return(
        <div >
            <div className="box" id="heading" onClick={handleExpend}>
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