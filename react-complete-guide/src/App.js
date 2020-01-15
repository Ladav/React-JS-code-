import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';   // first letter must be capital

class App extends Component {
  state = {
    persons: [
      { name: 'ladav', age: 21 },
      { name: 'ash', age: 21 },
      { name: 'chrollo', age: 22 }
    ],
    otherState: 'this is state property !'
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 21 },
        { name: 'ash', age: 21 },
        { name: 'chrollo', age: 23 }
      ]
    });
  };

  render() {
    return(
      <div className="App">
      <h1>my second react app.</h1>
      <p>it is actually working!</p>
      <button onClick={this.switchNameHandler.bind()}>Switch name</button> 
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}
      click={this.switchNameHandler}>I'm Savage...;)</Person>
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age} />
      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age} />
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