const Asteroid = require("./asteroid.js");

class Game {
    static DIM_X = 500
    static DIM_Y = 500
    static NUM_ASTEROIDS = 20

    randomPosition() {
        return [Math.floor(Math.random() * Game.DIM_X),
        Math.floor(Math.random() * Game.DIM_Y)];
    }
    constructor() {
        while (Game.NUM_ASTEROIDS) {
            new Asteroid(game.randomPosition);
            Game.NUM_ASTEROIDS--
        }
    }
}

module.exports = Game