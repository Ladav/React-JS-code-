import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import styled from 'styled-components';
// import Radium from 'radium';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        console.log('[Person.js] componentDidMount', this.inputElementRef);
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context)
    }

    render() {
        console.log('[Person.js] rending...');
        return  <Aux>
                    {this.context.authenticated ? <p>Authenticated!</p> : <p>please login!</p>}
                    
                    <h2 onClick={this.props.click}>{this.props.name}</h2>
                    <p>Age: {this.props.age} want's to be {Math.floor(Math.random() * 20)} again!</p>
                    <p>{this.props.children}</p>
                    <input 
                    type="text"
                    // ref={(inputEl) => { this.inputElement = inputEl; }} 
                    ref={this.inputElementRef}
                    onChange={this.props.changeName} 
                    value={this.props.name}>
                    </input>
                </Aux>
    };
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changeName: PropTypes.func
};

export default withClass(Person, classes.Person);