class Stone{
    constructor(x, y, r) {
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("sprites/stone.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle;
        push();
        rotate(angle);
        translate(pos.x, pos.y);
        imageMode(IMAGE);
        fill(225);
        image(this.image, 0, 0, this.r, this.r)
        pop();
      }
}