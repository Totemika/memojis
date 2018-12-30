export enum Facing {
    UP,
    DOWN
}

export class Tile {
    public readonly symbol: number;
    public facing : Facing;

    constructor(symbol: number){
        this.symbol = symbol;
        this.facing = Facing.DOWN;
    }

    public flip(){
        this.facing = this.facing === Facing.DOWN ? Facing.UP : Facing.DOWN;
    }
}

export interface MemoGameState {
    tiles: Tile[];
}

export class MemoGame {
    public static DEFAULT_SYMBOL_DIVERSITY = 5;
    private state: MemoGameState;

    constructor(public readonly symbolDiversity: number = MemoGame.DEFAULT_SYMBOL_DIVERSITY) {
        this.symbolDiversity = symbolDiversity || MemoGame.DEFAULT_SYMBOL_DIVERSITY;
        this.state = { tiles: this.generateTiles()};
    }


    getTileAt(index: number): Tile{
      return this.state.tiles[index];
    };

    getTiles (): Tile[]{
        return this.state.tiles;
    };

    facingUpTiles = ():Tile[]=>(this.state.tiles.filter(tile=> tile.facing === Facing.UP));

    isFinished() {
      return this.state.tiles.length === this.facingUpTiles().length;
    };

    flip(tile: Tile){
        const tileIndex = this.state.tiles.indexOf(tile);
        this.state.tiles[tileIndex].flip();
    }

    private generateTiles = () => {
        let tiles: Tile[] = [];
        for(let i=1; i<=this.symbolDiversity; i++){
            tiles.push(new Tile(i));
            tiles.push(new Tile(i));
        }
        return tiles;
    };

    check() {

    }
}
