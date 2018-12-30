import {Facing, MemoGame, Tile} from "./memo-game";

describe('Game setup', () => {
    const DEFAULT_SYMBOL_DIVERSITY = MemoGame.DEFAULT_SYMBOL_DIVERSITY;

    it('should return all the tiles', () => {
        const aSymbolDiversity = 6;
        const memoGame = new MemoGame(aSymbolDiversity);

        expect(memoGame.getTiles().length).toBe(aSymbolDiversity*2);
    });

    it('all the tiles should be facing down', () => {
        const memoGame = new MemoGame();
        const allTiles = memoGame.getTiles();

        const facingUp = allTiles.filter(tile => tile.facing === Facing.UP);
        const facingDown = allTiles.filter(tile => tile.facing === Facing.DOWN);

        expect(facingUp.length).toBe(0);
        expect(facingDown.length).toBe(DEFAULT_SYMBOL_DIVERSITY*2);
    });

    it('should face up a given tile', () => {
        const memoGame = new MemoGame();
        const thirdTile = memoGame.getTiles()[3];

        memoGame.flip(thirdTile);

        expect(memoGame.getTiles()[3].facing).toBe(Facing.UP);
    });
});