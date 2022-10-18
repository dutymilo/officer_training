// Javascript Classes
/* function pizzaFactory(pizzaSize) {  // factory functions create private variables
  const crust = "original";
  const size = pizzaSize;
  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`),
  };
}

const myPizza = pizzaFactory("small");
myPizza.bake(); */

class Pizza {
  crust = "original"; // the ._ implies it is private
  #sauce = "traditional"; // # makes it private (not widely used)
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  hereYouGo() {
    console.log(
      `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`
    );
  }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.crust);
