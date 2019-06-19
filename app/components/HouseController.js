import HouseService from "./HouseService.js";


let _houseService = new HouseService()

function drawHouses(){
    let housesElem = document.querySelector ("#houses")
    let template = ''
    let houses = _houseService.Houses
    houses.forEach(house => {
        template += house.Template
    })
    housesElem.innerHTML = template
}

export default class HouseController{
    constructor(){
        console.log('Controller says HI')
        drawHouses()
    }
}