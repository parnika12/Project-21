class ground{
    constructor(x,y,w,h){
        var ground_options={
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.body = Bodies.rectangle(x,y,w,h,ground_options);
        World.add(world,this.body);
    }
    display(){
        var ground_pos = this.body.position;
        push();
        translate (ground_pos.x,ground_pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill ("black");
        rect(0,0,this.w,this.h);
        pop ();

    }
}