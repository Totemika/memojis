import React, { Component } from 'react';
import './App.css';
import CardGrid from "./components/CardGrid/CardGrid";

class App extends Component {
    availableSymbols: string[] = ["🤫", "🤪", "🙂", "🙃", "😏"];
    contentCollection: string[] = [];

  public componentWillMount(){
      const pairs  = this.availableSymbols.concat(...this.availableSymbols);
      this.contentCollection = shuffleArray(pairs);
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Memojis</h1>
        <header className="App-header">
            <CardGrid contentCollection={this.contentCollection}/>
        </header>
      </div>
    );
  }
}
// https://gist.github.com/guilhermepontes/17ae0cc71fa2b13ea8c20c94c5c35dc4
const shuffleArray = (arr: any[]) => arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

export default App;
