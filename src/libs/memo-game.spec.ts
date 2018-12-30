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
        const randomValidIndex = getRandomValidIndex(DEFAULT_SYMBOL_DIVERSITY);
        const randomTile = memoGame.getTileAt(randomValidIndex);
        const previousFacing = randomTile.facing;

        memoGame.flip(randomTile);

        expect(previousFacing).toBe(Facing.DOWN);
        expect(memoGame.getTiles()[randomValidIndex].facing).toBe(Facing.UP);
    });
});

describe('For a game with one symbol', () => {
    it('should win when flipping the only two tiles', () => {
        const memoGame = new MemoGame(1);

        memoGame.flip(memoGame.getTiles()[0]);
        memoGame.flip(memoGame.getTiles()[1]);

        expect(memoGame.isFinished()).toBe(true);
    });
});

describe('For a game with two symbols', () => {
    it('should face down all tiles after flipping two tiles with different symbols', () => {
        const memoGame = new MemoGame(2);
        const aTile = memoGame.getTiles()[0];
        const aTileWithDifferentSymbol = memoGame.getTiles().filter(tile => tile.symbol !== aTile.symbol)[0];

        memoGame.flip(aTile);
        memoGame.flip(aTileWithDifferentSymbol);
        memoGame.check();
        const facingUp = memoGame.getTiles().filter(tile =>tile.facing === Facing.UP);

        expect(facingUp.length).toBe(0)
    });
});

// Random value equal or higher than 0 and lower than `limit`
const getRandomValidIndex = (limit: number) => Math.floor(Math.random() * limit);