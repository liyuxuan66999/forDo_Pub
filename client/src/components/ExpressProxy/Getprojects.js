import React, { Component } from 'react';

import GetprojectsProx from "../GetprojectsProx";

class Getprojects extends Component {
    state = {
        fetchedRes: ''
    }

    getResponse = async() => {
        const response = await fetch('/projects');
        const body = await response.json();
        if(response.status !== 200) throw Error(body.message);

        return body;
    }

    componentDidMount() {
        this.getResponse()
            .then(res => {
                const Data = res;
                this.setState({fetchedRes: Data});
            })
    }

    render(){
        const {fetchedRes} = this.state;
        return (
            <GetprojectsProx projects={fetchedRes.express} />
        );
    }
  
}

export default Getprojects;