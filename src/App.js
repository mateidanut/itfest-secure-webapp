import React, { Component } from 'react';
import LoginButton from './LoginButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Login here:</p>
        <LoginButton />
      </div>
    );
  }
}

export default App;
