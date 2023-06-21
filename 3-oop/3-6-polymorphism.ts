{
  type CoffeCup = {
    shot: number;
    hasMilk?: boolean;
    hasSuger?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shot: number): CoffeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEADNS_GRAMM_PER_SHIT: number = 7;
    private coffeeBeadns: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeadns = coffeeBeans;
    }

    static makeCoffeeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
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

    extact(shot: number): CoffeCup {
      console.log(`pulling ${shot} shot...`);
      return { shot, hasMilk: false };
    }

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
    makeCoffee(shot: number): CoffeCup {
      const coffee = super.makeCoffee(shot);
      this.steamMilk();

      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shot: number): CoffeCup {
      const coffee = super.makeCoffee(shot);
      return {
        ...coffee,
        hasSuger: true,
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeeLatteMachine(10, "ssss");
  const coffee = latteMachine.makeCoffee(1);
  console.log(machine, latteMachine, coffee);

  const machines = [
    new CoffeeMachine(16),
    new CaffeeLatteMachine(16, "ssssssssssssssssssss"),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeeLatteMachine(16, "ssssssssssssssssssss"),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log("=======================================");
    machine.makeCoffee(1);
  });
}
