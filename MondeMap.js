class MondeMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.ImageDuBas = new Image();
        this.ImageDuBas.src = config.lowerSrc;

        this.ImageDuHaut = new Image();
        this.ImageDuHaut = config.upperSrc;
    }

    drawImageDuBas(ctx) {
        ctx.drawImage(this.ImageDuBas,0,0)
        
    }

    drawImageDuHaut(ctx) {
        ctx.drawImage(this.ImageDuHaut, 0, 0)

    }

}

window.MondeMap = {
 map_grotte: {
    lowerSrc:"/Image du jeu/Environnement/map_grotte.png",
    gameObjects: {
     hero: new Personnage({
     isPlayerControlled: true,
     x: coord.NumCoord(7),
     y: coord.NumCoord(5),
    })
        }
    },  
  MapSortiDeGrotte: {
     lowersrc:"/Image du jeu/Environnement/map sorti de grotte.png",
         hero: new gameObjects({
             x: 5,
             y: 6,
             src:"/Image du jeu/Environnement/map sorti de grotte.png"
         })
    }
}


