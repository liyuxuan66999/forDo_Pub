import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GetTodoList from '../ExpressProxy/GetTodoList';
import {Link} from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import {useSelector, useDispatch} from "react-redux";
import ClearIcon from '@material-ui/icons/Clear';
import SaveIcon from '@material-ui/icons/Save';

function ProjectCardDetail(props){
    const projTitle = props.proj.title;
    const redirectURL = '/todolist/' + projTitle;
    const dispatch = useDispatch();
    const [isEditing, setEditMode] = useState(false);
    const [isExpanded, setExpanded] = useState(false);
    const list = useSelector(state => state.list.list);
    
    function clickEvent(){
        //editing mode dont have access to the todolist
        if(!isEditing){
            if(list===null || list.name != projTitle){
                dispatch(GetTodoList(projTitle));
            }
        }
        setExpanded(!isExpanded);
    }
    function enableEditMode(){
        setEditMode(!isEditing);
    }

    return(
    
        <Card className="classes.root" >
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" onClick={clickEvent}>
                        {projTitle}
                    </Typography>
                    {isExpanded ? (
                    <div>
                    {isEditing ? (
                    <div onClick={null}>
                        <SaveIcon /> 
                    </div>): null}
                    
                    <div id="editbutton" onClick={enableEditMode}>
                        {isEditing ? <ClearIcon />:<EditIcon />}
                        
                    </div>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Owner:
                        {isEditing ? (
                            <div>
                            <TextField 
                            id="standard-read-only-input" 
                            label="Read Only" 
                            InputProps={{
                                readOnly: true,
                            }} 
                            defaultValue={props.proj.owner} />
                            </div>):
                            (<div>{props.proj.owner}</div>)} 
                         
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Status: 
                        {isEditing ? (
                            <div>
                            <TextField 
                            id="standard-read-only-input" 
                            InputProps={{
                                readOnly: false,
                            }} 
                            defaultValue={props.proj.status} />
                            </div>):
                            (<div>{props.proj.status}</div>)} 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Assignee: 
                        {isEditing ? (
                            <div>
                            <TextField 
                            id="standard-read-only-input" 
                            InputProps={{
                                readOnly: false,
                            }} 
                            defaultValue={props.proj.assignee} />
                            </div>):
                            (<div>{props.proj.assignee}</div>)} 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Jira: 
                        {isEditing ? (
                            <div>
                            <TextField 
                            id="standard-read-only-input" 
                            InputProps={{
                                readOnly: false,
                            }} 
                            defaultValue={props.proj.jira} />
                            </div>):
                            (<div>{props.proj.jira}</div>)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Palamida: 
                        {isEditing ? (
                            <div>
                            <TextField 
                            id="standard-read-only-input" 
                            InputProps={{
                                readOnly: false,
                            }} 
                            defaultValue={props.proj.palamida} />
                            </div>):
                            (<div>{props.proj.palamida}</div>)} 
                    </Typography>
                    {isEditing ? 
                    null:
                    (<CardActions >
                        <Button size="small" color="primary" >
                            
                            <Link to={redirectURL} > 
                                Todo 
                            </Link>
                            
                        </Button>
                        <Button size="small" color="primary" >
                            learned
                        </Button>
                    </CardActions>)}
                    </div>
                    ): null}
                    
                    
                </CardContent>
            </CardActionArea>
        </Card>
        
        );
}
export default ProjectCardDetail;