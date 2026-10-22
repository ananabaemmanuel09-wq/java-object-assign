function vehicle(make,model,year){
  this.make = make;
  this.model = model;
  this.year = year;
}
vehicle.prototype.getinfo = function () {
  return `${this.year} ${this.make} ${this.model}`;
};
function car(make,model,year,doors){
  vehicle.call(this, make, model, year);
  this.doors = doors;
}
car.prototype = Object.create(vehicle.prototype);
car.prototype.constructor = car;
const baseVehicle = new vehicle("Toyota", "Camry SE", 2020);
console.log("base Vehicle:");
console.log(baseVehicle);
console.log(`Vehicle Info: ${baseVehicle.getinfo()}`);
const car1 = new car("Honda", "Civic", 2021, 4);
console.log("\nCar 1:");
console.log(car1);
console.log(`Car Info: ${car1.getinfo()}, Doors: ${car1.doors}`);
console.log("\nMethod Reference Verification:");
console.log(both cars share the same getinfo reference: ${car1.getinfo ===car2.getinfo});
console.log(`Method comes from vehicle prototype: ${car1.getinfo === vehicle.prototype.getinfo}`);