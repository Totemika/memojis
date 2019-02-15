import * as React from 'react';
import './Memojis.css';
import CardGrid from "../CardGrid/CardGrid";
import {MemoGame} from "../../libs/memo-game";
import {CardVM, fromTilesToCardVM} from "../CardGrid/Card/CardVM";

interface MemojisState {
    contentCollection: CardVM[];
}

class Memojis extends React.Component<{},MemojisState> {

    memoGame: MemoGame = new MemoGame();

    constructor(props: any){
        super(props);
        this.state = {
            contentCollection: fromTilesToCardVM(this.memoGame.getAllTiles())
        }
    }

    render() {
        return (
            <div className="App">
                <h1 className="App-title">Memojis</h1>
                <header className="App-header">
                    <CardGrid contentCollection={this.state.contentCollection} onCardClicked={this.onCardClicked}/>
                </header>
            </div>
        );
    }

    private onCardClicked = (cardId: number) => {
        let selectedCard = this.memoGame.getTileById(cardId);
        this.memoGame.faceUpTile(selectedCard);
        this.updateViewWithGameState();

        if(this.memoGame.getFacingUpTiles().length > 1) {
            this.memoGame.check();
            setTimeout(()=> {
                this.updateViewWithGameState();
            }, 1000);
        }
    };

    private updateViewWithGameState() {
        this.setState({
            ...this.state,
            contentCollection: fromTilesToCardVM(this.memoGame.getAllTiles())
        })
    }
}

export default Memojis;
