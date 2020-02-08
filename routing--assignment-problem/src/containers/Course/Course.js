import React, { Component } from 'react';

class Course extends Component {
    state = {
        id: null,
        title: null
    };

    loadQuery  = () => {
        if(this.state.id !== this.props.match.params.id) {
            console.log("loading query")
            const id = this.props.match.params.id;
            let title = '';
            const query = new URLSearchParams(this.props.history.location.search);
            for(let keyValue of query) {
                // ['title','the-title']
                title = keyValue[1];
            }
            this.setState({ id: id, title: title});
        }
    }

    componentDidMount() {
        console.log('[Course.js] inside componentDidMount ')
        this.loadQuery();
    }
    componentDidUpdate() {
        console.log('[Course.js] inside componentDidUpdate')
        this.loadQuery();
    }

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.state.id}</p>
            </div>
        );
    }
}

export default Course;