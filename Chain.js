class Chain{

    constructor(object1, object2){
        var options = {

            bodyA: object1.body,
            bodyB: object2.body,
            //pointB: point2,
            stiffness: 1,
            length: 100

        }
        this.chain = Matter.Constraint.create(options)
        World.add(world, this.chain);
    }

    display(){

        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);

    }
}