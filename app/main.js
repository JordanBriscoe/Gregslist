


class App{
    constructor(){
        this.controllers ={
            houseController: new HouseController()
        }
    }
}

window["app"] = new App