class DirectionInput {
    constructor(){
        this.MaintenirDirection = [];

        this.map = {
            "ArrowUp": "up",
            "KeyW": "up",
            "ArrowDown": "down",
            "KeyS": "down",
            "ArrowLeft": "left",
            "KeyA": "left",
            "ArrowRight": "right",
            "KeyD": "right",
        }
    }

    get direction() {
        return this.MaintenirDirection[0];
    }

    truc() {
        document.addEventListener("keydown", e =>{
            const dir = this.map[e.code];
            if(dir && this.MaintenirDirection.indexOf(dir) === -1){
                this.MaintenirDirection.unshift(dir);
                console.log(this.MaintenirDirection)
            }
        });
        document.addEventListener("keyup", e => {
            const dir = this.map[e.code];
            const index = this.MaintenirDirection.indexOf(dir);
            if (index > -1) {
                this.MaintenirDirection.splice(index,1);
                console.log(this.MaintenirDirection)
            }
        })
    }
}