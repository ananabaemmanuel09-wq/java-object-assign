const rectangle = {
  width: 12,
  height: 8,

  getArea() {
    return this.width * this.height;
  },

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
};

console.log("Rectangle Dimensions:");
console.log(`Width: ${rectangle.width}, Height: ${rectangle.height}`);

console.log("\nCalculations:");
console.log(`Area: ${rectangle.getArea()}`);
console.log(`Perimeter: ${rectangle.getPerimeter()}`);
