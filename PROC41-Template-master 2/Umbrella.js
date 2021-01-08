class Umbrella {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,300,300,options);
      this.width = 300;
      this.height = 300;
      World.add(world, this.body);
      this.image = loadImage("walking_1.png")
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };
