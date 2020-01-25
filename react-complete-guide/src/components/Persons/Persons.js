import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {

  static getDrivedStateFromProps(props, state) {
    console.log('[Persons.js] getDrivedStateFromProps');
    return state;
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  
  //   if(
  //     nextProps.personsArr !== this.props.personsArr || 
  //     nextProps.changed !== this.props.changed || 
  //     nextProps.clicked !== this.props.clicked 
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { msg: 'this is a snapshot!' };
  };
  
  // componentWillUpdate() {
  //   console.log('[Persons.js] componentWillUpdate');
  // };

  componentDidUpdate(props, state, snapshot) {
    console.log('[Persons.js] componentDidUpdate', snapshot)
  }

  render() {
    console.log('[Persons.js] rending...');

    return this.props.personsArr.map((person, index) => {
      return (
        <Person 
        name={person.name} 
        age={person.age} 
        key={person.id} 
        click={() => this.props.clicked(index)}
        changeName={(event) => this.props.changed(event, person.id)}/>
      )
  });
  };
};

export default Persons;