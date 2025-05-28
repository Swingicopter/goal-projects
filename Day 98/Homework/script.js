function car(brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year

    this.getDescription = function() {
        console.log(this.brand + " " + this.model + " " + this.year)
    }

    this.age = function() {
        console.log(2025 - this.year)
    }
}

const car1 = new car("Mercedes", "GLA 250", 2019)
car1.getDescription()


const car2 = new car("Toyota", "Prius", 2011)
car2.getDescription()

const car3 = new car("Porsche", "911", 1984)
car3.getDescription()

car3.age()