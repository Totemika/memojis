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

export class MemoGame {
    public static DEFAULT_SYMBOL_DIVERSITY = 5;
    private readonly tiles: Tile[];

    constructor(public readonly symbolDiversity: number = MemoGame.DEFAULT_SYMBOL_DIVERSITY) {
        this.symbolDiversity = symbolDiversity || MemoGame.DEFAULT_SYMBOL_DIVERSITY;
        this.tiles = this.generateTiles();
    }

    private generateTiles = () => {
        let tiles: Tile[] = [];
        for(let i=1; i<=this.symbolDiversity; i++){
            tiles.push(new Tile(i));
            tiles.push(new Tile(i));
        }
        return tiles;
    };

    public getTiles = (): Tile[] => {
        return this.tiles;
    };

    flip(tile: Tile) {
        const tileIndex = this.tiles.indexOf(tile);
        this.tiles[tileIndex].flip();
    }
}