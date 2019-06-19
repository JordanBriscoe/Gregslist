import House from "../models/house.js";


let _house = [new House()  ]


export default class HouseService{  
    constructor(){
        console.log('service says hi')
    }
}