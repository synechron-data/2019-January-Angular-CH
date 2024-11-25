abstract class Vehicle {
    private _id: number;
    protected _make: string;

    constructor(id: number, make = "Honda") {
        this._id = id;
        this._make = make;
    }

    start() {
        return `Vehicle with Id: ${this._id}, with make as: ${this._make} started...`;
    }

    abstract move(): string;
}

class FourWheeler extends Vehicle {
    private _model: string;

    constructor(id = 0, make = "Honda", model = "Civic") {
        super(id); // base()
        this._make = make;
        this._model = model;
    }

    start() {
        var baseStart = super.start();
        return `${baseStart} model is ${this._model}`;
    }

    move() {
        return "Moving like a Car";
    }
}

var v: Vehicle = new FourWheeler(1, "Ford", "Mustang");
console.log(v.start());
console.log(v.move());