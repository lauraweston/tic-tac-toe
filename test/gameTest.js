"use strict"

const assert = require("assert");
const Game = require("../js/game.js")

describe("Game", function () {
    let game;

    beforeEach(function () {
        game = new Game();
    });

    it("should start with an empty grid", function () {
        const positions = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
        positions.forEach(function (position) {
            assert.equal("", game.tokenAt(position));
        });
    });

    it("starts with player 1 move", function () {
        game.move("a1");
        assert.equal("O", game.tokenAt("a1"));
    });

    it("should alternate two players moves", function () {
        game.move("a1");
        game.move("b2");
        game.move("c3");
        assert.equal("X", game.tokenAt("b2"));
        assert.equal("O", game.tokenAt("c3"));
    });
    it("should not allow a player to take a position that is already taken", function () {
        game.move("a1");
        game.move("a1");
        assert.equal("O", game.tokenAt("a1"));
    });
    it("should not change to next player if current player makes an invalid move", function () {
        game.move("a1");
        game.move("a1");
        assert.equal(1, game.turnCount);
    });
    it("should declare the game over after all positions have been taken", function () {
        game.turnCount = 9;
        assert.equal(true, game.isOver());
    });

    describe("Winning moves", function () {
        const winningGames = [
            { moves: ["a1", "b1", "a2", "b2", "a3"], expectedWinner: "O" },
            { moves: ["b1", "c2", "b2", "a3", "b3"], expectedWinner: "O" },
            { moves: ["c1", "a1", "c2", "b2", "c3"], expectedWinner: "O" },
            { moves: ["a1", "b2", "b1", "c3", "c1"], expectedWinner: "O" },
            { moves: ["a2", "a1", "b2", "b1", "c2"], expectedWinner: "O" },
            { moves: ["a3", "a1", "b3", "b1", "c3"], expectedWinner: "O" },
            { moves: ["a1", "a2", "b2", "a3", "c3"], expectedWinner: "O" },
            { moves: ["c1", "a1", "b2", "b1", "a3"], expectedWinner: "O" },
            { moves: ["c1", "a1", "b1", "a2", "b2", "a3"], expectedWinner: "X" },
            { moves: ["c1", "b1", "c2", "b2", "a3", "b3"], expectedWinner: "X" },
            { moves: ["a1", "c1", "a3", "c2", "b2", "c3"], expectedWinner: "X" },
            { moves: ["c2", "a1", "b2", "b1", "c3", "c1"], expectedWinner: "X" },
            { moves: ["c3", "a2", "a1", "b2", "b1", "c2"], expectedWinner: "X" },
            { moves: ["c2", "a3", "a1", "b3", "b1", "c3"], expectedWinner: "X" },
            { moves: ["c1", "a1", "a2", "b2", "a3", "c3"], expectedWinner: "X" },
            { moves: ["a2", "c1", "a1", "b2", "b1", "a3"], expectedWinner: "X" }
        ];
        winningGames.forEach(function (winningGame) {
            it("should declare a winner if a player takes all positions in a row, column or diagonal", function () {
                winningGame.moves.forEach(function (position) {
                    game.move(position);
                });
                assert.equal(game.isWon(), true);
                assert.equal(game.isOver(), true);
                assert.equal(game.declareWinner(), winningGame.expectedWinner);
            });
        });
    });
});