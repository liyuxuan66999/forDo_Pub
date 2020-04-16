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
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    root: {
      maxWidth: 50,
    },
});

function ProjectCardEditMode(props){

    
    return(
    
        <Card className="classes.root" >
            <CardActionArea>
                <CardContent>
                    
                    <Typography gutterBottom variant="h5" component="h2" onClick={props.clickEvent}>
                        {props.proj.title}
                    </Typography>
                    
                    {props.expand ? (
                    <div>
                    <div id="editbutton" onClick={null}><EditIcon /></div>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Owner: 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    <TextField 
                        id="standard-read-only-input" 
                        label="Read Only" 
                        InputProps={{
                            readOnly: true,
                        }} 
                        defaultValue={props.proj.owner} />
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        Status: 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    <TextField 
                        id="standard-read-only-input" 
                        InputProps={{readOnly: !props.editMode,}} 
                        defaultValue={props.proj.status} />
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        Assignee: 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    <TextField required id="standard-required" label="Required" defaultValue={props.proj.assignee}  />
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        Jira:  
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    <TextField required id="standard-required" label="Required" defaultValue={props.proj.jira}  />
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        Palamida: 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    <TextField required id="standard-required" label="Required" defaultValue={props.proj.palamida}   />
                    </Typography>
                    </div>
                    ):null}
                    
                    
                </CardContent>
            </CardActionArea>
        </Card>
        
        );
}
export default ProjectCardEditMode;