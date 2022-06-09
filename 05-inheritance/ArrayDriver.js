"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(10, 15);
var myCircle = new Circle_1.Circle(5, 10, 15);
var myRectangle = new Rectangle_1.Rectangle(5, 10, 15, 20);
// declare an array
var theShapes = [];
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
//theShapes.push("will not work");
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var shape = theShapes_1[_i];
    console.log(shape.getInfo());
}
