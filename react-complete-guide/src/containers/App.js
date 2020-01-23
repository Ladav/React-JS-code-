import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
// import Person from '../components/Persons/Person/Person';   // first letter must be capital
import styled from 'styled-components';

import classes from './App.css';
import Persons from '../components/Persons/Persons';   // first letter must be capital
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';

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
  constructor(props) {
    super(props);
    console.log('[App.js] constructor!');
  }

  state = {
    persons: [
      { id: 'abc1', name: 'ladav', age: 21 },
      { id: 'abc2', name: 'ash', age: 21 },
      { id: 'abc3', name: 'chrollo', age: 22 }
    ],
    otherState: 'this is state property !',
    showPersons: false,
    showCockpit: true,
    counter: 0
  };

  static getDrivedStateFromProps(props, state) {
    console.log('[App.js] getDrivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(props, state) {
    console.log('[App.js] componentDidUpdate');
  }

  deletePersonHandler = (index) => {
    //const persons = this.state.persons.slice();
    //const persons = this.state.persons.filter(_=>_);
    const persons = [...this.state.persons];    // making a copy as arrays and objects are reference type and it is better to not to alter the original data or state
    // remove the element in the orginal state
    persons.splice(index, 1);
    // refresh the original state and components
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const index = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {...this.state.persons[index]};  // making a copy as arrays and objects are reference type and it is better to not to alter the original data or state
    // or const person = Object.assign({}, this.state.persons[index]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[index] = person;

    this.setState((prevState, props) => {
      return { 
        persons: persons,
        counter: ++prevState.counter
      };
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons personsArr={this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.nameChangeHandler} />);
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

    return(
      <>
        <button onClick={() => {this.setState({ showCockpit: false })}}>Remove Cockpit</button>
        { this.state.showCockpit ? 
        <Cockpit 
        title={this.props.appTitle}
        personLength={this.state.persons.length}
        showPersons={this.state.showPersons}
        clicked={this.togglePersonsHandler} />
        : null}
        {persons}
      </>
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

export default withClass(App, classes.App);