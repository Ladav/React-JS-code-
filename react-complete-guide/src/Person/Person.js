import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <h2 onClick={props.click}>{props.name}</h2>
            <p>Age: {props.age} want's to be {Math.floor(Math.random() * 20)} again!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeName} value={props.name}></input>
        </div>
    );
};

export default person;