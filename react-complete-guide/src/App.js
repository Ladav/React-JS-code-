import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';   // first letter must be capital

class App extends Component {   // react component
  state = {
    persons: [
      { name: 'ladav', age: 21 },
      { name: 'ash', age: 21 },
      { name: 'chrollo', age: 22 }
    ],
    otherState: 'this is state property !'
  };

  switchNameHandler = () => {
    // DON'T DO THIS: this.state.persons[0].name = newName;
    this.setState({
      persons: [
        { name: 'la', age: 21 },
        { name: 'ash', age: 21 },
        { name: 'chrollo', age: 23 }
      ]
    });
  };

 render () {
   return (
    <div className="App">
      <h1>my second react app.</h1>
      <p>it is actually working!</p>
      <button onClick={this.switchNameHandler}>Switch name</button> 
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>I'm Savage...;)</Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
    </div>
   );
 };
};

// function App() {  // react component, first letter capital
//   return (
//     <div className="App">
//       <h1>my second react app.</h1>
//       <p>it is actually working!</p>
//       <Person name="ladav" age="21">I'm Savage...;)</Person>  // first letter capital
//       <Person name="ash" age="21"/>
//       <Person name="chrollo" age="22"/>
//     </div>
//   );
//   //return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'my second react app.'));
// }

export default App;
