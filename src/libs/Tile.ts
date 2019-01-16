export enum Facing {
    UP,
    DOWN
}

export class Tile {
    public readonly symbol: number;
    public facing: Facing;

    constructor(symbol: number) {
        this.symbol = symbol;
        this.facing = Facing.DOWN;
    }

    public flip() {
        this.facing = this.facing === Facing.DOWN ? Facing.UP : Facing.DOWN;
    }
}