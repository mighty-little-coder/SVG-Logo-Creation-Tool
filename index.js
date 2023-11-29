const fs = require('fs');
const inquirer = require('inquirer'); // common js
const { Circle, Square, Triangle } = require("./lib/shapes");

// SVG Structuring class
class SVGInput {
  constructor() {
    this.shapeInput = '';
    this.textInput = '';
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${this.shapeInput}
      ${this.textInput}
    </svg>`;
  }

  svgTextInput(text, color) {
    this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  svgShapeInput(shape) {
    this.shapeInput = shape.render();
  }
};


// Writes questions to be answered in terminal
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter logo text up to three characters in length.',
    },
    {
      type: 'input',
      name: 'color-text',
      message: 'Enter color keyword or hexadecimal code for text color.',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select desired shape for SVG Logo.',
      choices: [
        'Circle',
        'Triangle',
        'Square',
      ]
    },
    {
      type: 'input',
      name: 'color-shape',
      message: 'Enter color keyword or hexadecimal code for logo background color.',
    },
  ])

  // Builds SVG from user input
  .then((svgBuilder) => {
    const filename = `logo.svg`;
    const svgCall = 
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${svgBuilder.svgTextInput}
      ${svgBuilder.svgShapeInput}
  </svg>`

    // Writes new SVG file
    fs.writeFile(filename, svgCall, (err) =>
      err ? console.log('Please check inputs, could not create log.scg file', err) : console.log('Successfully created a scalable logo in a logo.svg file'))
  })




//// Acceptance Criteria
//// GIVEN a command-line application that accepts user input
//// WHEN I am prompted for text
//// THEN I can enter up to three characters
//// WHEN I am prompted for the text color
//// THEN I can enter a color keyword (OR a hexadecimal number)
//// WHEN I am prompted for a shape
//// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
//// WHEN I am prompted for the shape's color
//// THEN I can enter a color keyword (OR a hexadecimal number)
//// WHEN I have entered input for all the prompts
//// THEN an SVG file is created named `logo.svg`
//// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

// The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.
// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

// The following example test should pass:
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');




//<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

// <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
// <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
// <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
// <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180" stroke="green" fill="transparent" stroke-width="5"/>







// .then((svgBuilder) => {
//   const filename = `logo.svg`;
//   const svgCall = new SVGInput();
//   const svg =
//     `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//     ${SVGInput.svgTextInput}
//     ${SVGInput.svgShapeInput}
// </svg>`

//   // Writes new SVG file
//   fs.writeFile(filename, svg, (err) =>
//     err ? console.log('Please check inputs, could not create log.scg file', err) : console.log('Successfully created a scalable logo in a logo.svg file'))
// })