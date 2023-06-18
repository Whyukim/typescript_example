{
  type coffeCup = {
    shot: number;
    hasMilk: boolean;
  };

  const BEADNS_GRAMM_PER_SHIT = 7;

  let coffeeBeadns: number = 20;

  function makeCoffee(shot: number): coffeCup {
    if (coffeeBeadns < shot * BEADNS_GRAMM_PER_SHIT) {
      throw new Error("Note enough coffee");
    }
    coffeeBeadns -= shot * BEADNS_GRAMM_PER_SHIT;

    return { shot, hasMilk: false };
  }

  console.log(makeCoffee(2));
}
