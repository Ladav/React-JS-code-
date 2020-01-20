import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {

  static getDrivedStateFromProps(props, state) {
    console.log('[Persons.js] getDrivedStateFromProps');
    return state;
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate')
    return true;
  };
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { msg: 'this is a snapshot!' };
  };
  
  componentWillUpdate() {
    console.log('[Persons.js] componentWillUpdate');
  };

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
        changeName={(event) => this.props.changed(event, index)} />
      )
  })
  }
};

export default Persons;