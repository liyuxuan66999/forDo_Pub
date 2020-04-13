import React from "react";
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

const useStyles = makeStyles({
    root: {
      maxWidth: 50,
    },
});

function ProjectCardDetail(props){

    return(
    
        <Card className="classes.root" >
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" onClick={props.clickEvent}>
                        {props.proj.title}
                    </Typography>
                    {props.expand ? (
                    <div>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Owner: {props.proj.owner} 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Status: {props.proj.status} 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Assignee: {props.proj.assignee} 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Jira: {props.proj.jira} 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Palamida: {props.proj.palamida} 
                    </Typography>
                    <CardActions >
                        <Button size="small" color="primary" >
                            
                            <Link to={props.url} > 
                                Todo 
                            </Link>
                            
                        </Button>
                        <Button size="small" color="primary" >
                            learned
                        </Button>
                    </CardActions></div>
                    ): null}
                    
                    
                </CardContent>
            </CardActionArea>
        </Card>
        
        );
}
export default ProjectCardDetail;