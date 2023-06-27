// interface Employee {
//   pay(): void;
// }

// class FullTimeEmployee implements Employee {
//   pay() {
//     console.log("full time");
//   }
//   fullTime(): void {}
// }
// class PartTimeEmployee implements Employee {
//   pay() {
//     console.log("part time");
//   }
//   partTime(): void {}
// }
// function pay<T extends Employee>(employee: T): T {
//   employee.pay();
//   return employee;
// }

// const hello = new FullTimeEmployee();
// const bob = new PartTimeEmployee();

// const afterHello: FullTimeEmployee = pay(hello);
// console.log(afterHello.fullTime);

const obj = {
  name: "hello",
  age: 20,
};

const obj2 = {
  world: "111",
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, "name"));
