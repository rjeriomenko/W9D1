const Asteroid = require("./asteroid.js");
const Util = require("./util.js");

class Asteroid extends MovingObject {
    static COLOR = "brown";
    static RADIUS = 25;
    constructor(obj) {
        this.pos = obj.pos;
        this.color = Asteroid.COLOR;
        this.radius = Asteroid.RADIUS;
        this.vel = [Math.random() * 25, Math.random() * 25] //account for negative x and y
    }
}

module.exports = Asteroid
