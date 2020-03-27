import React, { useState } from "react";
import ProjectDetail from "./ProjectDetail";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GetTodoList from '../ExpressProxy/GetTodoList';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
      maxWidth: 50,
    },
});

function CreateProjectCard(project){
    const dispatch = useDispatch();
    function handleToDo(){
        dispatch(GetTodoList(project.title));
    }
    function handleLearned(){
        console.log("Learned");
    }
    //const classes = useStyles();
    return(
    <Card className="classes.root">
        <CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Owner: {project.owner} 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Status: {project.status} 
                </Typography>
                <CardActions>
                    <Button size="small" color="primary" onClick={handleToDo}>
                        <Link to={'/todolist'} > 
                            Todo 
                        </Link>
                    </Button>
                    <Button size="small" color="primary" onClick={handleLearned}>
                        learned
                    </Button>
                </CardActions>
                
            </CardContent>
        </CardActionArea>
    </Card>);
}

export default CreateProjectCard;