class Form {

    constructor() {
      
      
      this.button = createButton('skill');
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("THE JURASSIC HUNT ");
      title.position(130, 0);
  
     
      this.button.position(300,400);
  
      this.button.mousePressed(()=>{
        
        this.button.hide();
        this.gameState=END;
      
      });
      this.button.mousePressed(()=>{
        
        this.button.hide();
        this.man.hide();
        this.dino.visible();
      
      });
      this.reset.mousePressed(()=>{
        gameState.update(0);
      })
    }
  }