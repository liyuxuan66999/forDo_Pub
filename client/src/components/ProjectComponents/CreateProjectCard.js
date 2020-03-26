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

const useStyles = makeStyles({
    root: {
      maxWidth: 50,
    },
});

function CreateProjectCard(project){
    function handleToDo(){
        console.log("TODO List");
    }
    function handleLearned(){
        console.log("LEARNED!");
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
                        to do
                    </Button>
                    <Button size="small" color="primary" onClick={handleLearned}>
                        learned
                    </Button>
                </CardActions>
                {/* <ProjectDetail 
                    key={project._id}
                    owner={project.owner} 
                    status={project.status}
                /> */}
            </CardContent>
        </CardActionArea>
    </Card>);
}

export default CreateProjectCard;