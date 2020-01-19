import React from 'react';

import classes from './Cockpit.css';

const Cockpit = (props) => {
    const assignedClasses = [];

    let btnClasses = '';

    if(props.showPersons) {
        btnClasses = classes.Red;
    }

    if(props.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>it is actually working!</p>
            <button className={btnClasses}
            onClick={props.clicked}>Switch name</button>
        </div>
    );
};

export default Cockpit;