class Monde {
 constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".interface");
    this.ctx = this.canvas.getContext("2d");

    }
 debutGameLoop() {
    const step = () => {
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.map.drawImageDuBas(this.ctx);

        Object.values(this.map.gameObjects).forEach(object => {
        object.update({
                arrow: this.directionInput.direction
            });

        object.sprite.draw(this.ctx);
        })

       
     

        requestAnimationFrame(() => {
            step();
        })
    }
    step();
 }

 truc() {
    this.map = new MondeMap(window.MondeMap.map_grotte)

    this.directionInput = new DirectionInput();
    this.directionInput.truc();
    

    this.debutGameLoop();
    }
    
 


        
    }



