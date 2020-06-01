import React from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Character from './components/Character';
const App = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character />
      <Button color='warning'>Button</Button>
    </div>
  );
}

export default App;
