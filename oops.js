class Car {
    constructor(name){
        this.name = name;
        for(const value of this.name){
            console.log(value);
        }
    }
    model = (model) => `I am ${this.name} car with ${model} model`
}
let car = new Car('BMW')
console.log(car.model("A4"));