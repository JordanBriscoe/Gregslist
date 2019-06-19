import HouseService from "./HouseService.js";


let _houseService = new HouseService()

export default class HouseController{
    constructor(){
        console.log('Controller says HI')
    }
}