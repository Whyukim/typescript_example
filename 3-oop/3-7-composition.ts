{
  type CoffeCup = {
    shot: number;
    hasMilk?: boolean;
    hasSuger?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shot: number): CoffeCup;
  }

  interface MilkFrother {
    makeMilk(cup: CoffeCup): CoffeCup;
  }

  interface SugerProvider {
    addSuger(cup: CoffeCup): CoffeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEADNS_GRAMM_PER_SHIT: number = 7;
    private coffeeBeadns: number = 0;

    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private suger: SugerProvider
    ) {
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

      const coffee = this.extact(shot);
      const suger = this.suger.addSuger(coffee);
      return this.milk.makeMilk(suger);
    }
  }

  // 싸구려 우유 거품기
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

  class NoMilkSteamer implements MilkFrother {
    makeMilk(cup: CoffeCup): CoffeCup {
      return cup;
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

  class NoSuger implements SugerProvider {
    addSuger(cup: CoffeCup): CoffeCup {
      return cup;
    }
  }

  // milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilkSteamer();

  // suger
  const candySuger = new CandySugerMixer();
  const suger = new SugerMixer();
  const noSuger = new NoSuger();

  // machine
  const sweetCandyMachine = new CoffeeMachine(10, noMilk, candySuger);
  const sweetMachine = new CoffeeMachine(10, noMilk, suger);

  const latteMachine = new CoffeeMachine(10, cheapMilkMaker, noSuger);
  const coldLatteMachine = new CoffeeMachine(10, coldMilkMaker, noSuger);
  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySuger);
}
