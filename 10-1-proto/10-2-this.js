console.log(this);

function simpleFunc() {
  console.log(this);
}
simpleFunc();

class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  };
  //   increase = function () {
  //     console.log(this);
  //   };
}
const counter = new Counter();
counter.increase();
const caller = counter.increase;
// const caller = counter.increase.bind(counter); function시 사용
caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();
