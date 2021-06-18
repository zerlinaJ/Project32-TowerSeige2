class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      
    
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png")
      this.Visiblity = 255;
      World.add(world, this.body);
      
    }

  
  
  
  display(){
      var pos= this.body.position;
   

   //console.log(this.body.speed);
 if(this.body.speed < 2.5){
  rectMode(CENTER);
  rect(pos.x,pos.y,this.width, this.height);
 }
else{
   World.remove(world,this.body);
   push()
   this.Visiblity = this.Visiblity-5
   tint(255,this.Visiblity);
   image(this.image,pos.x,pos.y,30,40)
   pop()

}
}

    score(){
      if(this.Visiblity <0 && this.Visiblity >=100){
        score++;
     
      }
    }
     

  }