// shape class for triangle to be exported to test file

class Shape {
  constructor() {
  this.color = "";
}
setColor(color) {
  this.color = color;
  }
}

class Triangle extends Shape {
  constructor(color) {
super(color);
  }
}
// render() {

// }

const newShape = new Triangle()
newShape.setColor("teal");
console.log(newShape.color)



// ADD ANDREW TIRPOK - UCONN FSC BOOTCAMPTUTOR TO README FOR COLLAB