{
  type coffeCup = {
    shot: number;
    hasMilk: boolean;
  };

  class coffeeMaker {
    static BEADNS_GRAMM_PER_SHIT: number = 7;
    coffeeBeadns: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeadns = coffeeBeans;
    }

    static makeCoffeeMachine(hi: number): coffeeMaker {
      return new coffeeMaker(hi);
    }

    makeCoffee(shot: number): coffeCup {
      if (this.coffeeBeadns < shot * coffeeMaker.BEADNS_GRAMM_PER_SHIT) {
        throw new Error("Note enough coffee");
      }
      this.coffeeBeadns -= shot * coffeeMaker.BEADNS_GRAMM_PER_SHIT;

      return { shot, hasMilk: false };
    }
  }

  let maker = new coffeeMaker(33);
  let maker2 = coffeeMaker.makeCoffeeMachine(10);
  console.log(maker);
}
