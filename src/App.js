import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './src/components/Items';

class App extends Component {
  render() {
    const items = [
      'Thor',
      'Captain America',
      'Hulk'
    ]
    return (
      <div className="App">
         <Items items={items} />
      </div>
    );
  }
}

export default App;
