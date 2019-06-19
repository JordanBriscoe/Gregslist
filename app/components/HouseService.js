import House from "../models/house.js";


let _house = [new House(3400, 'White', 1991)]


export default class HouseService{  
    constructor(){
        console.log('service says hi', _house)
    }
}