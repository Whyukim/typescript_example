Array;

class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = false;
}

const animals: Animal[] = [new Dog(), new Dog(), new Dog()];
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isDog !== undefined;
}

console.log(animals.every<Dog>(isDog));
