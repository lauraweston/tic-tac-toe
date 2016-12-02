"use strict"

const assert = require("assert");
const Game = require("../js/game.js")

describe("Game", function () {
    it("should have 2 players", function () {
        let player1;
        let player2;
        let game = new Game(player1, player2);
        assert.equal(game.players.length, 2);
    });
});