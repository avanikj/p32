class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling = loadImage('polygon.png')
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
    
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(6);
            stroke("rgb(48,22,8)")
            line(pointA.x-10, pointA.y-20, pointB.x+50, pointB.y);
            image(this.sling3,pointA.x-30,pointA.y-10,15,30)
        }
    }
    
}