import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: null
    };
    
    nameChangedhandler = (event) => {
        this.setState({name: event.target.value})
    };
    ageChangedhandler = (event) => {
        this.setState({age: event.target.value})
    };
    
    render() {
        return(<div className="AddPerson">
        <input type="text" placeholder="name" onChange={this.nameChangedhandler}></input>
        <input type="number" placeholder="age" onChange={this.ageChangedhandler}></input>
        <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
    </div>);
    };
}

export default AddPerson;