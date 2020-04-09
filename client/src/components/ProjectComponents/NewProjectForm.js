import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import handlePostProject from '../ExpressProxy/PostNewProject';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function NewProjectForm() {
    const classes = useStyles();
    const newProj = {
        projName:"", 
        projStatus: "",
        projOwner: "",
        projAssignee: "",
        projJira: "",
        projPala: ""
    };
    const [proj, setProj] = useState(newProj);
    function handleChange(event) {
        const {name, value} = event.target;
        setProj(preProj => {
            return {
                ...preProj,
                [name]: value
            };
        });
       
    }

    function handleSubmit(){
        const res = handlePostProject(proj);
    }
    return (
        <div>
        <form className={classes.root} noValidate autoComplete="off">

            <TextField 
                required id="standard-required" 
                label="Project Name" 
                placeholder="Required" 
                name="projName" 
                value={proj.projName} 
                onChange={handleChange}/>
            <TextField 
                required id="standard-required" 
                label="Project Status" 
                placeholder="Required" 
                name="projStatus" 
                value={proj.projStatus} 
                onChange={handleChange}/>
            <TextField 
                required id="standard-required" 
                label="Project Owner" 
                placeholder="Required" 
                name="projOwner" 
                value={proj.projOwner}
                onChange={handleChange}/>
            <TextField 
                id="standard-basic" 
                label="Project Assignee" 
                name="projAssignee" 
                value={proj.projAssignee} 
                onChange={handleChange}/>
            <TextField 
                id="standard-basic" 
                label="Project JIRA Link" 
                name="projJira" 
                value={proj.projJira} 
                onChange={handleChange}/>
            <TextField 
                id="standard-basic" 
                label="Project Palamida Link" 
                name="projPala" 
                value={proj.projPala} 
                onChange={handleChange}/>
            
        </form>
        <div className="wrapper">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </div>
        <h1>{proj.projName}</h1>
        <h1>{proj.projStatus}</h1>
        <h1>{proj.projOwner}</h1>
        <h1>{proj.projAssignee}</h1>
        <h1>{proj.projJira}</h1>
        <h1>{proj.projPala}</h1>
        </div>);
}

export default NewProjectForm;