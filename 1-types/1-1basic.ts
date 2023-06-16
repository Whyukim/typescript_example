{
  //number
  const num: number = 1;

  //string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  //undefined => 값이 있는지 없는지 결정되지않은 값
  let name: undefined; // 💩
  let age: number | undefined;

  //null => (좀더 명확하게)비어있는 값
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩 => 알수없는타입
  let notSure: unknown = 0;
  notSure = "hel";
  notSure = true;

  // any 💩 = 모든 값 다가능
  let anyti: any = 0;
  anyti = true;

  // void => return 값이 없다면
  function print(): void {
    console.log("hello");
    return;
  }

  // never => 함수에서 절대 return 되지 않는 경우
  function throwError(message: string): never {
    throw new Error(message);
    while (true) {}
  }

  // object
  let obj: object; // 💩
  function worl(obj: object) {}
  worl({ name: "hel" });
  worl({ name: "hewl" });
}
