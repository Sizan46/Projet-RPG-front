class gameObjects {
    constructor(config) {
       this.x = config.x || 0;
       this.y = config.y || 0;  
       this.direction = config.direction || "down";
       this.sprite = new Sprite({
           gameObjects: this,
           src:config.src || "/Image du jeu/Personnage/Heroes_01.png",
       });
    }
    update() {

    }
} 