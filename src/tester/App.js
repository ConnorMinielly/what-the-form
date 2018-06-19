import React, { Component } from 'react';
import { InitialForm } from './form-gen-example';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>What-The-Form Test!</h1>
        <InitialForm />
      </div>
    );
  }
}

export default App;
