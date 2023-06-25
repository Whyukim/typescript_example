{
  type CoffeCup = {
    shot: number;
    hasMilk?: boolean;
    hasSuger?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shot: number): CoffeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEADNS_GRAMM_PER_SHIT: number = 7;
    private coffeeBeadns: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeadns = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("beans value then 0");
      }

      this.coffeeBeadns += beans;
    }

    grindBeans(shot: number) {
      if (this.coffeeBeadns < shot * CoffeeMachine.BEADNS_GRAMM_PER_SHIT) {
        throw new Error(`Note enough coffee${this.coffeeBeadns}}`);
      }
      this.coffeeBeadns -= shot * CoffeeMachine.BEADNS_GRAMM_PER_SHIT;
      console.log(`grindBeans beans for ${shot}`);
    }

    preheat(): void {
      console.log("heating up...");
    }

    protected abstract extact(shot: number): CoffeCup;

    clean() {
      console.log("cleaning...");
    }

    makeCoffee(shot: number): CoffeCup {
      this.grindBeans(shot);
      this.preheat();
      return this.extact(shot);
    }
  }

  class CaffeeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    steamMilk(): void {
      console.log("steamMilk...");
    }

    protected extact(shot: number): CoffeCup {
      this.steamMilk();
      return {
        shot,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extact(shot: number): CoffeCup {
      return {
        shot,
        hasSuger: true,
      };
    }
  }

  const latteMachine = new CaffeeLatteMachine(10, "ssss");
  const coffee = latteMachine.makeCoffee(1);
  console.log(latteMachine, coffee);

  const machines = [
    new CaffeeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
    new CaffeeLatteMachine(16, "2"),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log("=======================================");
    machine.makeCoffee(1);
  });
}
