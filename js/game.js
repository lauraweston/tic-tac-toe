"use strict"

function Game () {
    this.grid = {};
    this.turnCount = 0;
};

Game.prototype.tokenAt = function (position) {
    const token = this.grid[position];
    return token ? token : "";
};

Game.prototype.move = function (position) {
    const token = this.turnCount % 2 === 0 ? "O" : "X";
    this.grid[position] = token;
    this.turnCount++;
};

module.exports = Game;