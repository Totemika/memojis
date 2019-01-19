import {Facing, Tile} from "./Tile";

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

    facingUpTiles = ():Tile[]=>(this.state.tiles.filter(tile=> tile.isFacingUp()));

    isFinished() {
      return this.state.tiles.length === this.facingUpTiles().length;
    };

    faceUp(tile: Tile){
        const tileIndex = this.state.tiles.indexOf(tile);
        const theTile = this.state.tiles[tileIndex];

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
            tiles.push(new Tile(i));
            tiles.push(new Tile(i));
        }
        return tiles
            .map((a) =>
                ({sort: Math.random(), value: a}))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value);
    };

    private flip(tile: Tile){
        const tileIndex = this.state.tiles.indexOf(tile);
        const theTile = this.state.tiles[tileIndex];

        if(theTile){
            theTile.flip();
        }
    }
}
