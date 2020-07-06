class db4{
    constructor(x, y) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, 75, 75, options);
        this.width = 75;
        this.height = 75;
        this.image = loadImage("pics/db4.png");
        World.add(world, this.body);
      }
      display(status1){

        if(status1===0)
        {
         var angle = this.body.angle;
         push();
         translate(this.body.position.x, this.body.position.y);
         rotate(angle);
         imageMode(CENTER);
         image(this.image, 0, 0, this.width, this.height);
         pop();
        }
        else{
         World.remove(world, this.body);
        }
   }
}