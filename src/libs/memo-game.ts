import {Facing, Tile} from "./Tile";
import {Tiles} from "./Tiles";

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

    getTiles (): Tile[]{
        return this.state.tiles;
    };

    getTiles2(): Tiles {
        return new Tiles(this.state.tiles);
    }

    facingUpTiles = ():Tile[]=>(this.state.tiles.filter(tile=> tile.facing === Facing.UP));

    isFinished() {
      return this.state.tiles.length === this.facingUpTiles().length;
    };

    flip(tile: Tile){
        const tileIndex = this.state.tiles.indexOf(tile);
        const theTile = this.state.tiles[tileIndex];
        theTile.flip();

        if(theTile.facing === Facing.UP) {
            this.state.checkingTiles.push(theTile);
        }
    }

    check() {
        if(this.state.checkingTiles.length === 2) {
            const first = this.state.checkingTiles[0];
            const second = this.state.checkingTiles[1];
            const areEqual = first.symbol === second.symbol;

            if(!areEqual) {
                this.flip(first);
                this.flip(second);
                this.state.checkingTiles = [];
            }
        }
    }

    private generateTiles = () => {
        let tiles: Tile[] = [];
        for(let i=1; i<=this.symbolDiversity; i++){
            tiles.push(new Tile(i));
            tiles.push(new Tile(i));
        }
        return tiles;
    };
}
