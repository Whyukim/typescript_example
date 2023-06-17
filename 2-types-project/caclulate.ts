type CaclulateType = "add" | "substract" | "multiply" | "divide" | "remainder";
function caclulate(type: CaclulateType, num1: number, num2: number): number {
  let answer = 0;
  if (type === "add") {
    answer = num1 + num2;
  } else if (type === "substract") {
    answer = num1 - num2;
  } else if (type === "multiply") {
    answer = num1 * num2;
  } else if (type === "divide") {
    answer = num1 / num2;
  } else if (type === "remainder") {
    answer = num1 % num2;
  }

  return Math.floor(answer);
}
console.log(caclulate("add", 1, 3));
console.log(caclulate("substract", 3, 1));
console.log(caclulate("multiply", 4, 2));
console.log(caclulate("divide", 4, 2));
console.log(caclulate("remainder", 5, 2));
