import React from "react";
//import {useDispatch} from "react-redux";
//import GetTodoList from "./GetTodoList";

function PostList(inputText, projTitle){
    const newItem = {name: projTitle, item: ""};
    const poststate = { post: newItem, resToPost:""};
    //const dispatch = useDispatch();
    newItem.item = inputText;
    poststate.post = newItem;
    const postToApi = async e =>{
        //e.preventDefault();
        const res = await fetch('/list',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({ post: poststate.post })
        });
        //will return "Registered!" if POST is successful
        const body = await res.text();
        //status = 200 if post is successful
        //const body = await res.status;
        //dispatch(GetTodoList(projTitle));
        return poststate.resToPost = body;
    }
    return postToApi();
}

export default PostList;