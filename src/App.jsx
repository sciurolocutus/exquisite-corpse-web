import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextEntryComponent from './TextEntryComponent.jsx';
import PriorSnippet from './PriorSnippet.jsx';

class App extends React.Component {
  render () {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
	      <PriorSnippet />
    	  <TextEntryComponent interval="15" cb="(self) => alert('You entered' + self.value)" />
        </header>
      </div>
    );
  }
}

export default App;
