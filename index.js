// Parent Class
class Motor {
  constructor(wheels, brand, miles, year, owner) {
    this.wheels = wheels;
    this.brand = brand;
    this.miles = miles;
    this.year = year;
    this.owner = owner;
  }

  get price() {
    console.log(this.carPrice());
  }

  get details() {
    console.log(this.vehicleDetails());
  }
}

// feedback: Implement polymorphism
class Napep extends Motor {
  constructor(wheels, brand, miles, year, owner) {
    super(wheels, brand, miles, year, owner);
  }
}

// Inheritance: Child class from Parent class
class Car extends Motor {
  vehicleDetails() {
    return `This ${this.brand} with ${
      this.wheels
    } wheels and a milage limit of ${this.miles} belongs to ${
      this.owner
    } and was bought in ${this.year}`;
  }

  carPrice() {
    return "This car is $ " + this.wheels * this.miles;
  }
}

const myCar = new Car(4, "Mercedes", 8000, 2017, "Seun");
console.log(myCar.details);

module.exports = { Car };
