// Imports classes to be used within shapes.test
const {Circle, Triangle, Square} = require("./shapes/index")

// Test code for circle
const newCirc = new Circle()
newCirc.setColor("red");
console.log(newShape.color)
expect(newCirc.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);

// Test code for triangles 
const newTri = new Triangle()
newTri.setColor("teal");
console.log(newTri.color)
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="${color}" />');

// Test code for square
const newSqua = new Square()
newSqua.setColor("green");
console.log(newSqua.color)
expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="green">`);