import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextEntryComponent from './TextEntryComponent.jsx';

class App extends React.Component {
  render () {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
  	      Enter text here!
          </p>
  	  <TextEntryComponent />
        </header>
      </div>
    );
  }
}

export default App;
