{
  // array
  const fruits: string[] = ["one", "two"];
  const scroes: Array<number> = [1, 3, 4];
  // 차이점 첫번째 경우 readonly가 사용 가능함
  function printArray(fruits: readonly string[]) {}
}
