// Importing the Inquirer package, which allows for interactive command-line prompts
const inquirer = require("inquirer");

// Importing the File System (fs) module to handle file operations like reading and writing files
const fs = require("fs");

// Importing shape classes (Triangle, Square, Circle) from the shapes library
// Each shape class has a render method to generate SVG elements for that shape
const { Triangle, Square, Circle } = require("./lib/shapes");

// Function to write an SVG file using user responses gathered from Inquirer prompts
function writeToFile(fileName, answers) {
  // Initializing an SVG string to start building the SVG content
  let svgString = "";
  
  // Adding the SVG container, setting the width and height for the logo dimensions
  svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  
  // Adding a <g> (group) tag to wrap the shape and text elements
  // This ensures the text layer will be on top of the shape, not behind it
  svgString += "<g>";
  
  // Inserting the shape choice (Triangle, Square, or Circle) directly into the SVG string
  // This serves as a placeholder to represent the chosen shape
  svgString += `${answers.shape}`;

  // Conditional block to check the shape selected by the user
  // Each condition instantiates the appropriate shape class and adds the corresponding SVG element to the svgString with the specified color
  let shapeChoice;
  if (answers.shape === "Triangle") {
    // Creates a Triangle instance and sets its color based on user input
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    // Creates a Square instance and sets its color based on user input
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    // Creates a Circle instance and sets its color based on user input
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  // Adding a <text> element to display the user-defined text
  // This text is centered horizontally with `text-anchor="middle"`, positioned at (150, 130) with a default font size of 40
  // The color and text content are set based on user input
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  
  // Closing the group tag </g> for the SVG content grouping
  svgString += "</g>";
  
  // Closing the main SVG tag </svg> to complete the SVG content structure
  svgString += "</svg>";

  // Writing the final SVG content to a file using the specified file name
  // Logs an error if the file write fails, otherwise logs "Generated logo.svg" if successful
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

// Function to prompt the user for logo customization inputs using Inquirer
// Collects text, color, shape, and shape color preferences to customize the SVG logo
function promptUser() {
  inquirer
    .prompt([
      // Prompt for the logo text, limited to three characters to fit the logo design
      {
        type: "input",
        message: "What text would you like your logo to display? (Enter up to three characters)",
        name: "text",
      },
      // Prompt for the text color, allowing users to specify a color keyword or hexadecimal color code
      {
        type: "input",
        message: "Choose text color (Enter color keyword OR a hexadecimal number)",
        name: "textColor",
      },
      // Prompt for the shape selection, allowing the user to choose from Triangle, Square, or Circle options
      {
        type: "list",
        message: "What shape would you like the logo to render?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      // Prompt for the shape's background color, allowing users to specify a color keyword or hexadecimal color code
      {
        type: "input",
        message: "Choose shape color (Enter color keyword OR a hexadecimal number)",
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {
      // Validation to ensure the logo text is no more than three characters
      // If the text input exceeds three characters, an error message is displayed, and the prompt restarts
      if (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        promptUser();
      } else {
        // Calls writeToFile to generate the SVG file based on user input
        writeToFile("logo.svg", answers);
      }
    });
}

// Invoking promptUser to initiate the Inquirer prompts when the application is run
promptUser();
