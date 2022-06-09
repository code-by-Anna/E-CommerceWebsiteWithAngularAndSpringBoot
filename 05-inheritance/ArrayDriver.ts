import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 15);
let myRectangle = new Rectangle(5, 10, 15, 20);

// declare an array
let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
//theShapes.push("will not work");

for(let shape of theShapes) {
    console.log(shape.getInfo());
}