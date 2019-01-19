import {Tile} from "../../../libs/Tile";

const emojisCollection = ['☺️', '🤫', '🤪', '🤥', '😭', '🤢', '😧'];

export interface CardVM {
    id: number;
    content: string;
    isFacingUp: boolean;
}

export const fromTileToCardVM = (tile: Tile): CardVM => ({
    id: tile.id,
    isFacingUp: tile.isFacingUp(),
    content: emojisCollection[tile.symbol]
});

export const fromTilesToCardVM = (tiles: Tile[]) => tiles.map(fromTileToCardVM);