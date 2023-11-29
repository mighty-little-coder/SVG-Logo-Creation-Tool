// shape class for triangle to be exported to test file
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
      return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
  }
};

class Triangle extends Shape {
  render() {
      return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
  }
};

class Square extends Shape {
  render() {
      return `<rect x="50" height="200" width="200" fill="${this.color}">`
  }
};



// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

// <circle cx="150" cy="100" r="80" fill="green" />

// <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>


// class Triangle extends Shape {
//   constructor(color) {
//     super(color);
//   }

//   render() {

//   }
// }

// const newShape = new Triangle()
// newShape.setColor("teal");
// console.log(newShape.color)



// ADD ANDREW TIRPOK - UCONN FSC BOOTCAMP TUTOR TO README FOR COLLAB




// class Shape{
//   // Defines a class called Shape which has a constructor intializing 'color' and sets the 'color' value.
  
//       constructor(){
//           this.color=''
//       }
//       setColor(color){
//           this.color=(color);
//       }
//   }
  // // Defines a Circle class that extends Shape and renders an SVG Circle with position, size, and fill color based on the current instance's properties.
  // class Circle extends Shape{
  //     render(){
  //         return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
  //     }
  // }
  // Defines a Square class that extends Shape and renders an SVG Square with position, size, and fill color based on the current instance's properties.
  // class Square extends Shape{
  //     render(){
  //         return `<rect x="50" height="200" width="200" fill="${this.color}">`
  //     }
  // }
  // Defines a Triangle(Polygon) class that extends Shape and renders an SVG Triangle(Polygon) with position, size, and fill color based on the current instance's properties.
  // class Triangle extends Shape{
  //     render(){
  //         //return `<polygon height="100%" width="100%" points="25,75 75,25 25,25" fill="${this.color}">'
  //         return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
  //     }
  // };
  
  module.exports = {Circle, Square, Triangle}