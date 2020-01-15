import React from 'react';

const person = (props) => {
    return (
        <div className="person">
            <h2>{props.name}</h2>
            <p>Age: {props.age} want's to be {Math.floor(Math.random() * 20)} again!</p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;