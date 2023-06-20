{
  type CoffeCup = {
    shot: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shot: number): CoffeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shot: number): CoffeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEADNS_GRAMM_PER_SHIT: number = 7;
    private coffeeBeadns: number = 0;

    private constructor(coffeeBeans: number) {
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
    }

    preheat(): void {
      console.log("heating up...");
    }

    extact(shot: number): CoffeCup {
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

  class AmatrurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(10);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeCoffeeMachine(32);
  const amateur = new AmatrurUser(maker);
  const pro = new ProBarista(maker);
  pro.makeCoffee();
  console.log(CoffeeMachine);
}
