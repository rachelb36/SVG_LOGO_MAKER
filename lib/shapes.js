// Base Shape class defines the structure and behavior common to all shapes
class Shape {
  constructor() {
    // Initializes the color property for each shape instance
    this.color = "";
  }

  // Sets the color of the shape to the specified value
  setColor(colorVar) {
    this.color = colorVar;
  }
}

// Triangle class extends Shape and inherits its properties and methods
class Triangle extends Shape {
  // Generates an SVG polygon element in the shape of a triangle, using the set color
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Square class extends Shape and inherits its properties and methods
class Square extends Shape {
  // Generates an SVG rectangle element representing a square, using the set color
  render() {
    return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
  }
}

// Circle class extends Shape and inherits its properties and methods
class Circle extends Shape {
  // Generates an SVG circle element, using the set color
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  }
}

// Exports Triangle, Square, and Circle classes for use in other modules
module.exports = { Triangle, Square, Circle };
