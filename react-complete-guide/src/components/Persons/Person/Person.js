import React, { Component } from 'react';
//import styled from 'styled-components';
// import Radium from 'radium';

import Aux from '../../../hoc/Auxiliary';

import $classes from './Person.css';


class Person extends Component {

    render() {
        console.log('[Person.js] person');
        return  <Aux>
                    <h2 onClick={this.props.click}>{this.props.name}</h2>
                    <p>Age: {this.props.age} want's to be {Math.floor(Math.random() * 20)} again!</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.changeName} value={this.props.name}></input>
                </Aux>
    };
};

export default Person;