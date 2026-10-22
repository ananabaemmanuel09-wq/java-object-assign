function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.getInfo = function () {
  return `${this.year} ${this.make} ${this.model}`;
};

function Car(make, model, year, doors) {
  Vehicle.call(this, make, model, year);
  this.doors = doors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

const baseVehicle = new Vehicle("Yamaha", "MT-07", 2023);
console.log("Base Vehicle:");
console.log(baseVehicle);
console.log(`Vehicle Info: ${baseVehicle.getInfo()}`);

const car1 = new Car("Honda", "Civic", 2022, 4);
const car2 = new Car("Mazda", "MX-5", 2024, 2);

console.log("\nCar 1:");
console.log(car1);
console.log(`Info: ${car1.getInfo()}, Doors: ${car1.doors}`);

console.log("\nCar 2:");
console.log(car2);
console.log(`Info: ${car2.getInfo()}, Doors: ${car2.doors}`);

console.log("\nMethod Reference Verification:");
console.log(`Both cars share the same getInfo reference: ${car1.getInfo === car2.getInfo}`);
console.log(`Method comes from Vehicle prototype: ${car1.getInfo === Vehicle.prototype.getInfo}`);
