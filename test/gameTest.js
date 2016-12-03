"use strict"

const assert = require("assert");
const Game = require("../js/game.js")

describe("Game", function () {
    let game;
    
    beforeEach(function() {
        game = new Game();
    });

    it("should start with an empty grid", function () {
        const positions = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
        positions.forEach(function(position) {
            assert.equal("", game.tokenAt(position));
        });
    });
    
    it("starts with player 1 move", function () {
        game.move("a1");
        assert.equal("O", game.tokenAt("a1"));
    });

    it("should alternate two players moves", function() {
        game.move("a1");
        game.move("b2");
        game.move("c3");
        assert.equal("X", game.tokenAt("b2"));
        assert.equal("O", game.tokenAt("c3"));
    });
});