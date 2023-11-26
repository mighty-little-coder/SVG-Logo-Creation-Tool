const fs = require('fs');
const inquirer = require('inquirer'); // common js

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




// node index.js

// User Story
// AS a freelance web developer
// I WANT to generate a simple logo for my projects
// SO THAT I don't have to pay a graphic designer

// Acceptance Criteria
    // GIVEN a command-line application that accepts user input
    // WHEN I am prompted for text
    // THEN I can enter up to three characters
    // WHEN I am prompted for the text color
    // THEN I can enter a color keyword (OR a hexadecimal number)
    // WHEN I am prompted for a shape
    // THEN I am presented with a list of shapes to choose from: circle, triangle, and square
    // WHEN I am prompted for the shape's color
    // THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

// The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.
// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

// The following example test should pass:
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');