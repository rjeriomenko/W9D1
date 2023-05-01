const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

class Asteroid extends MovingObject {
    static BASESPEED = 5;
    static MORESPEED = 2;
    static COLOR = "brown";
    static RADIUS = 25;
    constructor(pos) {
        let movObj = {
            color: Asteroid.COLOR,
            radius: Asteroid.RADIUS,
            vel: Util.scale(Util.randomVec(Asteroid.BASESPEED), Asteroid.MORESPEED),
            pos: pos
        }
        super(movObj)
    }

}

module.exports = Asteroid
