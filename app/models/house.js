


export default class House{
    constructor(data){
        this.size = data.size
        this.color = data.color
        this.year = data.year
    }

    get Template(){
        return `
        <div class="col-4">
                <h4>Size: ${this.size}</h4>
                <h4>Color: ${this.color}</h4>
                <h4>Year: ${this.year}</h4>
            </div>
            `
    }
}