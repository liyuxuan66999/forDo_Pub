import React, {Component} from "react";
import {connect} from "react-redux";
import fetchProjectsAction from "./ExpressProxy/Getprojects";
//import {fetchProjects} from "./Actions";

class AppLayout extends Component {

    
    componentWillMount(){
         this.props.dispatch(fetchProjectsAction());
        
    }
    render(){
        const { error, loading, projects } = this.props;
        
        return (
            <div>
            {projects.map(project => (
                <div >
                    
                
                    <div>
                    <p>{project.status}</p>
                    <p>{project.owner}</p>
                    </div>
                
                </div>
            ))}
        </div>
        );
    }
}

const mapStateToProps = state => ({
    projects: state.proj.projects,
    loading: state.proj.pending,
    error: state.proj.error
});

export default connect(mapStateToProps)(AppLayout);
