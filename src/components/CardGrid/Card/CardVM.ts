import {Tile} from "../../../libs/Tile";

export interface CardVM {
    id: number;
    content: string;
    isFacingUp: boolean;
}

export const fromTileToCardVM = (tile: Tile): CardVM => ({
    id: tile.id,
    isFacingUp: tile.isFacingUp(),
    content: tile.symbol.toString()
});

export const fromTilesToCardVM = (tiles: Tile[]) => tiles.map(fromTileToCardVM);