{
  const x = {};
  const y = {};
  console.log(x);
  console.log(y);
  console.log(x.toString());
  console.log(x.__proto__ === y.__proto__);

  const arr = [];
  console.log(arr);

  function CoffeeMachine(beans) {
    this.beans = beans;
    // instance member level
    // this.make = (shot) => {
    //   console.log(shot + "make");
    // };
  }

  // Prototype
  CoffeeMachine.prototype.make = (shot) => {
    console.log(shot + "make proto");
  };

  const a = new CoffeeMachine(10);
  const b = new CoffeeMachine(20);
  console.clear();
  a.make(2);

  function Machine(milk) {
    this.milk = milk;
  }
  Machine.prototype = Object.create(CoffeeMachine.prototype);

  const c = new Machine(123);
  c.make(5);
}
