class Rope{
    constructor(bodyA, bodyB,offsetX,offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;
  var options = {
      bodyA: bodyA, 
      bodyB: bodyB,
      pointB = {x:this.offsetX, y:this.offsetY}
  }  
  this.Rope = Constraint.create(options);
  World.add(world, this.Rope);

}
display(){
    var pointA = this.Rope.bodyA.position;
    var pointB = this.Rope.bodyB.position;
    strokeWeight(17);
    var anchor1x = pointA.x;
    var anchor1y = pointA.y;
    var anchor2x = pointB.x+this.offsetX;
    var anchor2y = pointB.y+this.offsetY;      
    line(anchor1x,anchor1y,anchor2x,anchor2y)
}
}