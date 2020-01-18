import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';   // first letter must be capital

const StyledButton = styled.button`
  background-color: ${(props) => props.alter ? 'red' : 'green'};
  color: #fff;
  padding: 10px;
  border: 1px solid #aaa;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.alter ? 'salmon' : 'lightgreen'};
    color: #000;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 'abc1', name: 'ladav', age: 21 },
      { id: 'abc2', name: 'ash', age: 21 },
      { id: 'abc3', name: 'chrollo', age: 22 }
    ],
    otherState: 'this is state property !',
    showPersons: false
  };

  deletePersonHandler = (index) => {
    //const persons = this.state.persons.slice();
    //const persons = this.state.persons.filter(_=>_);
    const persons = [...this.state.persons];    // making a copy as arrays and objects are reference type and it is better to not to alter the original data or state
    // remove the element in the orginal state
    persons.splice(index, 1);
    // refresh the original state and components
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, index) => {
    const person = {...this.state.persons[index]};  // making a copy as arrays and objects are reference type and it is better to not to alter the original data or state

    person.name = event.target.value;

    const persons = this.state.persons;
    persons[index] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    let style__btn = {
      // backgroundColor: 'green',
      // color: '#fff',
      // padding: '10px',
      // border: '1px solid #aaa',
      // borderRadius: '5px',
      // cursor: 'pointer',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: '#000'
      // }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={this.deletePersonHandler.bind(this, index)}
            name={person.name} 
            age={person.age} 
            key={person.id} 
            changeName={(event) => this.nameChangeHandler(event, index)}/> })
          }
        </div>
      );

      style__btn.backgroundColor = '#f00';
      style__btn[':hover'] = {
        backgroundColor: 'salmon',
        color: '#000'
      }
    }
    
    // older version 
    if (this.state.showPersons) {
    //   persons = (
    //     <div>
    //       <Person 
    //       name={this.state.persons[0].name} 
    //       age={this.state.persons[0].age}
    //       click={() => this.switchNameHandler('la') }>I'm Savage...;)</Person>
    //       <Person 
    //       name={this.state.persons[1].name} 
    //       age={this.state.persons[1].age}
    //       changeName={this.nameChangeHandler} />
    //       <Person 
    //       name={this.state.persons[2].name} 
    //       age={this.state.persons[2].age} />
    //     </div>
    //   );
    }

    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return(
      <div className="App">
        <h1>my second react app.</h1>
        <p className={classes.join(' ')}>it is actually working!</p>
        <StyledButton 
        alter={this.state.showPersons}
        onClick={this.togglePersonsHandler}>Switch name</StyledButton> 
        {persons}
      </div>
    );
  };
};

// const App = () => { 
//   const [personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'ladav', age: 21 },
//       { name: 'ash', age: 21 },
//       { name: 'chrollo', age: 22 }
//     ]
//   });

//   const [ otherState, setOtherState ] = useState('this is state property !');

//   console.log(personsState)
//   console.log(otherState)

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'la', age: 21 },
//         { name: 'ash', age: 21 },
//         { name: 'chrollo', age: 23 }
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <h1>my second react app.</h1>
//       <p>it is actually working!</p>
//       <button onClick={switchNameHandler}>Switch name</button> 
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>I'm Savage...;)</Person>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
//   //return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'my second react app.'));
// };

export default App;