import React from 'react';
import styled from 'styled-components';
// import Radium from 'radium';

import './Person.css';

const StyledDiv = styled.div`
    width: 60%;
    margin: 0 auto;
    text-align: center;
    padding: 15px;
    border: 1px solid #eee;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = (props) => {
    return (
        <StyledDiv>
            <h2 onClick={props.click}>{props.name}</h2>
            <p>Age: {props.age} want's to be {Math.floor(Math.random() * 20)} again!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeName} value={props.name}></input>
        </StyledDiv> 
    );
};

export default person;