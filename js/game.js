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
    const player = this.turnCount % 2 === 0 ? "O" : "X";
    if (!this.grid[position]) {
        this.grid[position] = player;
        this.turnCount++;
    }
};

module.exports = Game;