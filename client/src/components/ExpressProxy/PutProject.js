function PutProject(project){
    const poststate = { post: project, resToPost:""};
    const reqUrl = '/project/'+project._id;
    const postToApi = async e =>{
        //e.preventDefault();
        const res = await fetch(reqUrl,{
            method: 'PUT',
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
export default PutProject;