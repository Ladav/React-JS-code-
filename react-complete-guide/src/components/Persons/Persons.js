import React from 'react';

import Person from './Person/Person';

const Persons = (props) => props.personsArr.map((person, index) => {
    return (
      <Person 
      name={person.name} 
      age={person.age} 
      key={person.id} 
      click={() => props.clicked(index)}
      changeName={(event) => props.changed(event, index)} />
    )
});

export default Persons;