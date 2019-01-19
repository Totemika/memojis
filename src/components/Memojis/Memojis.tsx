import React, { Component } from 'react';
import './Memojis.css';
import CardGrid from "../CardGrid/CardGrid";
import {MemoGame} from "../../libs/memo-game";

interface MemojisState {
    contentCollection: string[];
}

class Memojis extends React.Component<{},MemojisState> {

  memoGame: MemoGame = new MemoGame();


  constructor(props: any){
      super(props);
      this.state = {
          contentCollection: this.memoGame.getTiles()
                            .map(tile => tile.symbol.toString())
      }
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Memojis</h1>
        <header className="App-header">
            <CardGrid contentCollection={this.state.contentCollection}/>
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

export default Memojis;
