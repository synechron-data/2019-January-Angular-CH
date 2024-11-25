"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PointModule_1 = require("./PointModule");
var point = new PointModule_1.Point(2, 3);
console.log(point.getDistance());
document.getElementById("hOne").innerHTML =
    point.getDistance().toString();
