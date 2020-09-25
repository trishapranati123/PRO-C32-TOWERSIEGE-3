class block extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    //this.image = loadImage("wood1.png");
    this.visiblity=255;
  }  
  score(){

    if(this.visiblity < 0 && this.visiblity > -105) {
      score++;  
    }
}
  display(){          
    //console.log(this.body.speed);
    var pos =this.body.position;      
    if(this.body.speed < 5) {        
      super.display();     
    }
    else{
      World.remove(world,this.body);
      push();
      this.visiblity=this.visiblity-5;
      tint(255,this.visiblity);      
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
};