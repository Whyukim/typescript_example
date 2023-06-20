{
  type coffeCup = {
    shot: number;
    hasMilk: boolean;
  };

  class coffeeMaker {
    private static BEADNS_GRAMM_PER_SHIT: number = 7;
    private coffeeBeadns: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeadns = coffeeBeans;
    }

    static makeCoffeeMachine(hi: number): coffeeMaker {
      return new coffeeMaker(hi);
    }

    fillCoffeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("beans value then 0");
      }

      this.coffeeBeadns += beans;
    }

    makeCoffee(shot: number): coffeCup {
      if (this.coffeeBeadns < shot * coffeeMaker.BEADNS_GRAMM_PER_SHIT) {
        throw new Error("Note enough coffee");
      }
      this.coffeeBeadns -= shot * coffeeMaker.BEADNS_GRAMM_PER_SHIT;

      return { shot, hasMilk: false };
    }
  }

  //   let maker = new coffeeMaker(33);
  let maker2 = coffeeMaker.makeCoffeeMachine(10);
  console.log(maker2);

  class User {
    get fullName(): string {
      return this.fullName;
    }
    private num: number = 4;
    get age(): number {
      return this.num;
    }

    set age(value: number) {
      this.num = value;
    }

    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User("hello", "wor˜ld");
  user.age = 10;
  console.log(user.age);
}
