// Importing Triangle, Square, and Circle classes from shapes.js
// Each class represents a distinct shape that can be rendered with a specified color
const { Triangle, Square, Circle } = require("./shapes.js");

// Unit test suite for Triangle class
// Verifies that a Triangle instance renders correctly with the specified color
describe("Triangle test", () => {
  test("renders a triangle with a blue background", () => {
    // Creates an instance of the Triangle class
    const shape = new Triangle();
    // Sets the color of the triangle to blue
    shape.setColor("blue");
    // Expects the output of render() to match the SVG format for a blue triangle
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

// Unit test suite for Square class
// Verifies that a Square instance renders correctly with the specified color
describe("Square test", () => {
  test("renders a square with a purple background", () => {
    // Creates an instance of the Square class
    const shape = new Square();
    // Sets the color of the square to purple
    shape.setColor("purple");
    // Expects the output of render() to match the SVG format for a purple square
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="purple" />'
    );
  });
});

// Unit test suite for Circle class
// Verifies that a Circle instance renders correctly with the specified color
describe("Circle test", () => {
  test("renders a circle with a #ca00ca background color", () => {
    // Creates an instance of the Circle class
    const shape = new Circle();
    // Sets the color of the circle to #ca00ca (hexadecimal format)
    shape.setColor("#ca00ca");
    // Expects the output of render() to match the SVG format for a circle with #ca00ca fill color
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#ca00ca" />'
    );
  });
});
