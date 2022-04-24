class Sprite {
    constructor(config) {
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.finiLoad = true;
        }
        //Les animation des sprites de base a leur emplacement initial
        this.animations = config.animations || {
            NeutralBas: [
                [74,66]
            ]
        }
        this.AnimationsActuels = config.AnimationsActuels || "NeutralBas";
        this.AnimationsActuelsFrame = 0;

        this.gameObjects = config.gameObjects;
    }
    draw(ctx) {
        const x = this.gameObjects.x * 10;
        const y = this.gameObjects.y * 25;

        this.finiLoad && ctx.drawImage(this.image,
            74,66,
            20,32,
            x,y,
            20,32
            
            )
    }
}