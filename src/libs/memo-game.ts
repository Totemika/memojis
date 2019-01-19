import {Tile} from "./Tile";

export interface MemoGameState {
    tiles: Tile[];
    checkingTiles: Tile[];
}

export class MemoGame {
    public static DEFAULT_SYMBOL_DIVERSITY = 5;
    private state: MemoGameState;

    constructor(public readonly symbolDiversity: number = MemoGame.DEFAULT_SYMBOL_DIVERSITY) {
        this.symbolDiversity = symbolDiversity || MemoGame.DEFAULT_SYMBOL_DIVERSITY;
        this.state = { tiles: this.generateTiles(), checkingTiles: [] };
    }

    getTileAt(index: number): Tile{
      return this.state.tiles[index];
    };

    getTileById(id: number): Tile {
        return this.state.tiles.filter(tile=> tile.id === id)[0];
    }

    getTiles (): Tile[]{
        return this.state.tiles;
    };

    facingUpTiles = ():Tile[]=>(this.state.tiles.filter(tile=> tile.isFacingUp()));

    facingDownTiles = ():Tile[]=>(this.state.tiles.filter(tile=> tile.isFacingDown()));

    isFinished() {
      return this.state.tiles.length === this.facingUpTiles().length;
    };

    faceUp(tile: Tile){
        const theTile= this.state.tiles.filter(item => item.id === tile.id)[0];

        if(theTile.isFacingDown()){
            theTile.flip();
            this.state.checkingTiles.push(theTile);
            if(this.state.checkingTiles.length===2){
                this.check();
            }
        }
    }

    private check() {
        if(this.state.checkingTiles.length === 2) {
            const first = this.state.checkingTiles[0];
            const second = this.state.checkingTiles[1];
            const areEqual = first.symbol === second.symbol;

            if(!areEqual) {
                this.flip(first);
                this.flip(second);
            }
            this.state.checkingTiles = [];
        }
    }

    private generateTiles = () => {
        let tiles: Tile[] = [];
        for(let i=1; i<=this.symbolDiversity; i++){
            tiles.push(new Tile(i, tiles.length+1));
            tiles.push(new Tile(i, tiles.length+1));
        }
        return tiles;
    };

    private flip(tile: Tile){
        const theTile= this.state.tiles.filter(item => item.id === tile.id)[0];

        if(theTile){
            theTile.flip();
        }
    }
}
