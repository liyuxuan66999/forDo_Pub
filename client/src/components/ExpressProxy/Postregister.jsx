//import React, {Component} from "react";
import React from "react";
import Register from "../Register";


function Postregister(){
    //const [poststate, setpostState] = useState("");
    const newUser = { email: "", password: ""};
    
    const poststate = { post: newUser, resToPost:""};
    const postToApi = async e =>{
        //e.preventDefault();
        const res = await fetch('/register',{
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

        poststate.resToPost = body;
    }
    function updatePost(postVal){
        poststate.post = postVal;
        postToApi();
    }
    return (
        <Register handleSubmit = {updatePost} />
    );
   
}
export default Postregister;