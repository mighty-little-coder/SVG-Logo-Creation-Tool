// shape class for triangle to be exported to test file

class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}


// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

// <circle cx="150" cy="100" r="80" fill="green" />

// <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>


class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {

  }
}

const newShape = new Triangle()
newShape.setColor("teal");
console.log(newShape.color)



// ADD ANDREW TIRPOK - UCONN FSC BOOTCAMPTUTOR TO README FOR COLLAB