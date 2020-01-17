import React from 'react';

const Input = (props) => {
    let msg = '';

    if(props.length < 5) {
        msg = 'text too short!';
    }
    if(props.length > 10) {
        msg = 'text too long!';
    }

    return (
        <div>
            <p>{msg}</p>
        </div>
    );
};

export default Input;