import React, { useEffect, useRef, useContext } from 'react';

import AuthContext from '../../context/auth-context';

import classes from './Cockpit.css';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const context = useContext(AuthContext);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect 1');
    toggleBtnRef.current.click();
    
    // http request
    // const timer = setTimeout(() => {
    //   alert('something happen to persons DB.');
    // },1000);

    return () => {
      // clearTimeout(timer);
      console.log('[Cockpit.js] doing cleanup work inside useEffect 1!')
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect 2');
    
    return () => {
      console.log('[Cockpit.js] doing cleanup work inside useEffect 2!')
    }
  });

  const assignedClasses = [];
  let btnClasses = '';
  if(props.showPersons) {
      btnClasses = classes.Red;
  }

  if(props.personLength <= 2){
    assignedClasses.push(classes.red);
  }
  if(props.personLength <= 1){
    assignedClasses.push(classes.bold);
  }

  return (
      <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}>it is actually working!</p>
          <button className={btnClasses}
          ref={toggleBtnRef}
          onClick={props.clicked}>
            Switch name
          </button>
          <button onClick={context.login}>login in</button>
      </div>
  );
};

export default React.memo(Cockpit);