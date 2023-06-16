{
  // // js
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // ts
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // js
  // function jsFetchNum(id) {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // ts
  // function tsFetchNum(id: string): Promise<number> {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  function addNumbers(...rest: number[]): number {
    return rest.reduce((a, b) => a + b, 0);
  }
  console.log(addNumbers(1, 2, 4, 65, 6));
}
