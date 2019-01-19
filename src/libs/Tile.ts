export enum Facing {
    UP,
    DOWN
}

export class Tile {
    public readonly id: number;
    public readonly symbol: number;
    public facing: Facing;

    constructor(symbol: number, id: number) {
        this.symbol = symbol;
        this.facing = Facing.DOWN;
        this.id = id;
    }

    public isFacingUp = () => this.facing === Facing.UP;

    public isFacingDown = () => this.facing === Facing.DOWN;

    public flip() {
        this.facing = this.facing === Facing.DOWN ? Facing.UP : Facing.DOWN;
    }
}