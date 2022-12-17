/* Don't add unneeded context

If your class/object name tells you something, don't repeat that in your variable name */

// BAD
/*
const Car = {
  carMake: "Honda",
  carModel: "Accord",
  carColor: "Blue"
};

function paintCar(car, color) {
  car.carColor = color;
}
 */


//GOOD

const Car = {
  make: "Honda",
  model: "Accord",
  color: "Blue"
};

function paintCar(car, color) {
  car.color = color;
}