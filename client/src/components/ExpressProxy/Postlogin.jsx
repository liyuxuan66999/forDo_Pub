import React, {useState} from "react";
import Login from "../Login";
import {loggedin} from "../Actions";
import {useSelector, useDispatch}from "react-redux";   

function Postlogin(){
    const user = {email: "", password: ""};
    const poststate = {post: user, resToPost:""};
    const dispatch = useDispatch();
    
    const postToApi = async e =>{
        //e.preventDefault();
        const res = await fetch('/login',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({ post: poststate.post })
        });
        //will return "logged in!" if POST is successful
        const body = await res.statusText;
        //status = 200 if post is successful
        //const body = await res.status;
        if(body==="OK"){
            dispatch(loggedin());
        }
        poststate.resToPost = body;
    }
    function updatePost(postVal){
        poststate.post = postVal;
        postToApi();
    }
    return (
        <Login handleSubmit = {updatePost}/>
    )
}

export default Postlogin;