class Car {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed
        console.log("I am parent class");
    }
}

class BMW extends Car {
    constructor(name, speed, color, type) {
        super(name, speed)
        this.color = color;
        this.type = type;
    }
    move = () => console.log(`${this.name} car moving with ${this.speed} I am ${this.type} I have ${this.color} red`);
}

let bmw = new BMW("A4",120,"RED","Sidan");
bmw.move();