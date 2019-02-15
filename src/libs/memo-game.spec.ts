import {MemoGame} from "./memo-game";
import {Facing, Tile} from "./Tile";


describe('Game setup', () => {
    const DEFAULT_SYMBOL_DIVERSITY = MemoGame.DEFAULT_SYMBOL_DIVERSITY;

    it('should return all the tiles', () => {
        const aSymbolDiversity = 6;
        const aMemoGame = new MemoGame(aSymbolDiversity);

        expect(aMemoGame.getAllTiles().length).toBe(aSymbolDiversity*2);
    });

    it('all the tiles should be facing down', () => {
        const aMemoGame = new MemoGame();

        const facingUpTiles = aMemoGame.getFacingUpTiles();
        const facingDownTiles = aMemoGame.getFacingDownTiles();

        expect(facingUpTiles.length).toBe(0);
        expect(facingDownTiles.length).toBe(DEFAULT_SYMBOL_DIVERSITY*2);
    });

    it('should face up a given tile', () => {
        const aMemoGame = new MemoGame();
        const randomTile = getRandomTileFrom(aMemoGame);
        const previousFacing = randomTile.facing;

        aMemoGame.faceUpTile(randomTile);
        const theRandomTile = aMemoGame.getTileById(randomTile.id);

        expect(previousFacing).toBe(Facing.DOWN);
        expect(theRandomTile.facing).toBe(Facing.UP);
    });
});

describe('For a game with one symbol', () => {
    it('should win when flipping the only two tiles', () => {
        const memoGame = new MemoGame(1);

        memoGame.faceUpTile(memoGame.getTileAt(0));
        memoGame.faceUpTile(memoGame.getTileAt(1));

        expect(memoGame.isGameFinished()).toBe(true);
    });
});

describe('For a game with two symbols', () => {

    it('should face down all tiles after flipping two tiles with different symbols', () => {
        const memoGame = new MemoGame(2);
        const aTile = memoGame.getTileAt(0);
        const aTileWithDifferentSymbol = getTileWithDifferentSymbol(memoGame, aTile);

        memoGame.faceUpTile(aTile);
        memoGame.faceUpTile(aTileWithDifferentSymbol);

        expect(memoGame.getFacingUpTiles().length).toBe(0)
    });

    it('should leave facing up two tiles with same symbol', () => {
        const memoGame = new MemoGame(2);
        const aTile = memoGame.getTileAt(0);
        const aTileWithSameSymbol = getTileWithSameSymbol(memoGame, aTile);

        memoGame.faceUpTile(aTile);
        memoGame.faceUpTile(aTileWithSameSymbol);

        expect(memoGame.getFacingUpTiles().length).toBe(2)
    });

    function getFacingDownTile(aMemoGame: MemoGame):Tile {
        return aMemoGame.getFacingDownTiles()[0];
    }

    it('should leave facing up all tiles when solved', () => {
        const memoGame = new MemoGame(2);
        const aTile = memoGame.getTileAt(0);
        const aTileWithSameSymbol = getTileWithSameSymbol(memoGame, aTile);

        memoGame.faceUpTile(aTile);
        memoGame.faceUpTile(aTileWithSameSymbol);

        const aFacingDownTile = getFacingDownTile(memoGame);
        memoGame.faceUpTile(aFacingDownTile);
        const anotherFacingDownTile = getFacingDownTile(memoGame);
        memoGame.faceUpTile(anotherFacingDownTile);

        expect(memoGame.getFacingUpTiles().length).toBe(memoGame.symbolDiversity*2);
    });
});

// Random value equal or higher than 0 and lower than `limit`
const getRandomValidIndex = (limit: number) => Math.floor(Math.random() * limit);
const getRandomTileFrom = (memoGame: MemoGame): Tile => {
    const randomValidIndex = getRandomValidIndex(memoGame.symbolDiversity);
    return memoGame.getTileAt(randomValidIndex);
};
const getTileWithDifferentSymbol = (aMemoGame: MemoGame, aTile: Tile):Tile =>
    aMemoGame
        .getAllTiles()
        .filter(tile => tile.symbol !== aTile.symbol)[0];
const getTileWithSameSymbol = (aMemoGame: MemoGame, aTile:Tile) => aMemoGame
    .getAllTiles()
    .filter(tile => tile.symbol === aTile.symbol)[1];
