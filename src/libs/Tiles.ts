import {Facing, Tile} from "./Tile";

export class Tiles {
    constructor(private tiles: Tile[]) {
        this.tiles = tiles;
    }

    facingUPCount(): number{
        return this.tiles.filter(tile=> tile.facing === Facing.UP).length;
    }

    facingDOWNCount(): number{
        return this.tiles.filter(tile=> tile.facing === Facing.DOWN).length;
    }
}