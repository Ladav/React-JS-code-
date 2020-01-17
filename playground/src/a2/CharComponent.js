import React from 'react';

const CharComponent = (props) => {
    const style__charComponent = {
        display: 'inline-block',
        textAlign: 'center',
        padding: '16px',
        margin: '16px',
        border: '1px solid #000'
    };

    return (
        <p style={style__charComponent} onClick={props.click}>{props.char}</p>
    );
};

export default CharComponent;