class MovingObject {
    constructor(obj) {
        this.pos = obj.pos;
        this.vel = obj.vel;
        this.radius = obj.radius;
        this.color = obj.color;
        this.draw = function(ctx) {
            ctx.beginPath();
            ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
            ctx.stroke()
            ctx.fillStyle = this.color
            ctx.fill()
        }
        this.move = function() {
            this.pos[0] += this.vel[0] 
            this.pos[1] += this.vel[1]
        }
    }
    
}

module.exports = MovingObject
// export default MovingObject;