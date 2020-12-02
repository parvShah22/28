class Stone{
    constructor(x,y){
        Option ={
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2    
        }
    


    


      this.radius = 40
      this.body = Bodies.circle(x, y,40 , Option);
      this.image=loadImage("sprites/stone.png")
      World.add(world, this.body);
}
   display(){
      var pos =this.body.position;
   

      
      
      imageMode(CENTER);
      fill("red");
      image(this.image,pos.x,pos.y, this.radius*2, this.radius*2);
      
        };
      }