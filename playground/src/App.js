import React, { Component } from 'react';
import './App.css';

/**a2 assignment two */
import Validation from './a2/ValidationComponent';
import CharComponent from './a2/CharComponent';

class App extends Component {
  state = {
    text: '',
    length: 0
  };

  charInputHandler = (event) => {
    this.setState({
      text: event.target.value,
      length: event.target.value.length
    });
  };

  charDeleteHandler = (index) => {
    let text = this.state.text.split('');

    text.splice(index, 1);
    const updatedText = text.join('');

    this.setState({
      text: updatedText
    });

  };

  render() {

    let chars = null;
    if(this.state.text) {
      let charsArr = this.state.text.split('');

      chars = (
        <div>
          {
            charsArr.map((c, index) => 
              <CharComponent 
              char={c}
              click={() => this.charDeleteHandler(index)} />)
          }
        </div>
      );
    }

    return (
      <div className='App'>
        <input type="text" onChange={this.charInputHandler} value={this.state.text}></input>
        <p>length: {this.state.length}</p>
        <Validation length={this.state.length}/>
        {chars}
      </div>
    );
  };
};

export default App;

/**a1 assignment one */
// import { UserInput, UserOutput } from './IO/IO'

// class App extends Component {
//   state = {
//     users: [
//       { name: 'la' },
//       { name: 'ash' }
//     ]
//   };

//   nameChangeHandler = (event) => {
//     this.setState({
//       users: [
//         { name: event.target.value },
//         { name: 'ash' }
//       ]
//     });
//   };

//   render() {

//     return (
//       <div className="App">
//           <UserInput
//           curUser={this.state.users[0].name}
//           nameChange={this.nameChangeHandler.bind(this)}/>
//           <UserOutput name={this.state.users[0].name}/>
//           <UserOutput name={this.state.users[1].name}/>
//       </div>
//     );
//   }
// };

// export default App;