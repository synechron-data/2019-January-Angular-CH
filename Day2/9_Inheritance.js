var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = (function () {
    function Vehicle(id, make) {
        if (make === void 0) { make = "Honda"; }
        this._id = id;
        this._make = make;
    }
    Vehicle.prototype.start = function () {
        return "Vehicle with Id: " + this._id + ", with make as: " + this._make + " started...";
    };
    return Vehicle;
}());
var FourWheeler = (function (_super) {
    __extends(FourWheeler, _super);
    function FourWheeler(id, make, model) {
        if (id === void 0) { id = 0; }
        if (make === void 0) { make = "Honda"; }
        if (model === void 0) { model = "Civic"; }
        var _this = _super.call(this, id) || this;
        _this._make = make;
        _this._model = model;
        return _this;
    }
    FourWheeler.prototype.start = function () {
        var baseStart = _super.prototype.start.call(this);
        return baseStart + " model is " + this._model;
    };
    FourWheeler.prototype.move = function () {
        return "Moving like a Car";
    };
    return FourWheeler;
}(Vehicle));
var v = new FourWheeler(1, "Ford", "Mustang");
console.log(v.start());
console.log(v.move());
