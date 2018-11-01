import React, { Component } from 'react';
import './App.css';
import CardGrid from "./components/CardGrid/CardGrid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Memojis</h1>
        <header className="App-header">
            <CardGrid/>
        </header>
      </div>
    );
  }
}

export default App;
