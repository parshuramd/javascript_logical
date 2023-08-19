class Car {
    #model
    constructor(name, model) {
        this.name = name;
        this.#model = model;
        this.age =10;
        this.this = 'that'
    }
    move() {
        console.log(this.#model);
    }
}

let car = new Car('BMW', 'A4');
console.log(car)