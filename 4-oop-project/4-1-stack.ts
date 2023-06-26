{
  interface ITempStack {
    push: (name: string) => void;
    pop: () => void;
    get: () => void;
  }
  class TempStack implements ITempStack {
    private arr: string[] = [];

    push(name: string): void {
      this.arr.push(name);
    }
    pop(): void {
      this.arr.pop();
    }

    get() {
      return this.arr;
    }
  }

  const stack = new TempStack();
  stack.push("hello");
  console.log(stack.get());
  stack.pop();
  console.log(stack.get());
  stack.push("hello1");
  stack.push("hello2");
  console.log(stack.get());
}
