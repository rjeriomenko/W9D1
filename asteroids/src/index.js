// import MovingObject from "./moving_object.js";
document.addEventListener("DOMContentLoaded", function () {
    console.log("Webpack is working!")

    const MovingObject = require("./moving_object.js");
    // const Util = require("./util.js");
    const Asteroid = require("./asteroid.js");
    const Game = require("./game.js");
    
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");


//////TESTING CODE
    let mobject = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    })
    mobject.draw(ctx)
    mobject.move()
    // console.log(mobject)

    // window.MovingObject = MovingObject;
    // window.Vector = Util.randomVec
    window.Asteroid = Asteroid;
});