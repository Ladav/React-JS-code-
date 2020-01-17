import React from 'react';

import './UserOutput.css'

const UserInput = (props) => {
    const style__input = {
        padding: '10px',
        background: '#ddd',
        boder: '1px solid #555',
        borderRadius: '5px',
        color: '#555',
        fontSize: '25px'
      };

    return (
        <input type="text" onChange={props.nameChange} value={props.curUser} style={style__input}></input>
    );
};

const UserOutput = (props) => {
    return (
        <div className="UOut"> 
            <p>
                name: {props.name} Create TWO new components: UserInput and UserOutput
                UserInput should hold an input element, UserOutput two paragraphs
                Output multiple UserOutput components in the App component (any paragraph texts of your choice)
            </p>
            <p>
                name: {props.name} Create TWO new components: UserInput and UserOutput
                UserInput should hold an input element, UserOutput two paragraphs
                Output multiple UserOutput components in the App component (any paragraph texts of your choice)
            </p>
        </div>
    );
};

export { UserInput, UserOutput };