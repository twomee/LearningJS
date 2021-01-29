class Car{
    constructor(name,color,engine){
        this.name = name;
        this.color = color;
        this.engine = engine;
    }

    getCarObject(){
        return {
            name: this.name,
            color: this.color,
            engine: this.engine
        }
    }
}

class FordCar extends Car{
    getId(){
        return this.name + this.color + this.engine;
    }
}

let fordObject = new FordCar('ford', 'white', '1200'); 
let id = fordObject.getId(); 
console.log(id); // opelwhite1200