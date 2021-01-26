class Polygon{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.7,
            friction:0.5,
            density:4.7
        }

        this.polygon=Bodies.circle(x,y,15,options);
        this.image=loadImage("polygon.png")
        World.add(world,this.polygon)
    }

    display(){
        imageMode(CENTER)
        image(this.image,this.polygon.position.x,this.polygon.position.y,60,60)
       
        
    }    
}