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

  interface MilkFrother {
    makeMilk(cup: CoffeCup): CoffeCup;
  }

  interface SugerProvider {
    addSuger(cup: CoffeCup): CoffeCup;
  }

  // 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private getMilk(): void {
      console.log("steam som mlik...");
    }

    makeMilk(cup: CoffeCup): CoffeCup {
      this.getMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private getMilk(): void {
      console.log("fancy steam som mlik...");
    }

    makeMilk(cup: CoffeCup): CoffeCup {
      this.getMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private getMilk(): void {
      console.log("cold steam som mlik...");
    }

    makeMilk(cup: CoffeCup): CoffeCup {
      this.getMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 설탕 제조기
  class CandySugerMixer implements SugerProvider {
    private getSuger() {
      console.log("getting sugger");
      return true;
    }

    addSuger(cup: CoffeCup): CoffeCup {
      const suger = this.getSuger();
      return {
        ...cup,
        hasSuger: true,
      };
    }
  }

  class SugerMixer implements SugerProvider {
    private getSuger() {
      console.log("getting SugerMixer");
      return true;
    }

    addSuger(cup: CoffeCup): CoffeCup {
      const suger = this.getSuger();
      return {
        ...cup,
        hasSuger: true,
      };
    }
  }

  // 커피머신
  class CaffeeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkFother: MilkFrother
    ) {
      super(beans);
    }
    makeCoffee(shot: number): CoffeCup {
      const coffee = super.makeCoffee(shot);
      return this.milkFother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(beans: number, private suger: SugerProvider) {
      super(beans);
    }
    makeCoffee(shot: number): CoffeCup {
      const coffee = super.makeCoffee(shot);
      return this.suger.addSuger(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      private milk: MilkFrother,
      private suger: SugerProvider
    ) {
      super(beans);
    }
    makeCoffee(shot: number): CoffeCup {
      const coffee = super.makeCoffee(shot);
      const suger = this.suger.addSuger(coffee);
      return this.milk.makeMilk(suger);
    }
  }

  // milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();

  // suger
  const candySuger = new CandySugerMixer();
  const suger = new SugerMixer();

  // machine
  const sweetCandyMachine = new SweetCoffeeMaker(10, candySuger);
  const sweetMachine = new SweetCoffeeMaker(10, suger);

  const latteMachine = new CaffeeLatteMachine(10, "sss", cheapMilkMaker);
  const coldLatteMachine = new CaffeeLatteMachine(10, "sss", coldMilkMaker);
  const sweetLatteMachine = new SweetCaffeLatteMachine(
    12,
    cheapMilkMaker,
    candySuger
  );
}
