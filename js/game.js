"use strict"

function Game() {
    this.grid = {};
    this.turnCount = 0;
    this.winner;
    this.winningSets = [
        ["a1", "a2", "a3"],
        ["b1", "b2", "b3"],
        ["c1", "c2", "c3"],
        ["a1", "b1", "c1"],
        ["a2", "b2", "c2"],
        ["a3", "b3", "c3"],
        ["a1", "b2", "c3"],
        ["c1", "b2", "a3"]
    ];
};

Game.prototype.tokenAt = function (position) {
    const token = this.grid[position];
    return token ? token : "";
};

Game.prototype.move = function (position) {
    const player = this.turnCount % 2 === 0 ? "O" : "X";
    const tokenAtPosition = this.tokenAt(position);
    if (tokenAtPosition === "") {
        this.grid[position] = player;
        this.turnCount++;
    }
};

Game.prototype.isOver = function () {
    return this.isWon() || this.turnCount > 8;
};

Game.prototype.isWon = function () {
    for (let set of this.winningSets) {
        const moves = this.getPositionTokens(set);
        const m = moves.join("");
        if (m === "XXX" || m === "OOO") {
            return true;
        }
    }
    return false;
};

Game.prototype.getPositionTokens = function (set) {
    const self = this;
    return set.map(function (position) {
        return self.tokenAt(position);
    });
};

module.exports = Game;