class Sling {
  constructor(body1,point2){
   var options ={
    length:10,
    stiffness:0.01,
    bodyA:body1,
    pointB:point2
   }
   this.slingshot = Constraint.create(options);
   World.add(world,this.slingshot);
   this.image=loadImage("sprites/sling1.png");
   this.image3=loadImage("sprites/sling3.png");
  }
  display(){
   if (this.slingshot.bodyA!=null){
    var pointA = this.slingshot.bodyA.position;
    var pointB = this.slingshot.pointB;
    strokeWeight(4);
   if (pointA.x<210){
    image(this.image3,pointA.x-30,pointA.y-10,15,30);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    line(pointA.x,pointA.y,190,75);
   }
   else {
    image(this.image3,pointA.x+22,pointA.y-10,15,30);
    line(pointA.x+25,pointA.y,pointB.x,pointB.y);
    line(pointA.x+25,pointA.y,190,75);
   }
  }
   image(this.image,170,-15,100,230);

  }
  fly(){
    this.slingshot.bodyA=null;
  }
  attach(body){
  this.slingshot.bodyA=body
  }
}