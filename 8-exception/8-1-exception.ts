{
  // Exception
  // const array = new Array(10000000000000000000);

  function readFile(fileName: string): string {
    if (fileName === "no") {
      throw new Error("not file");
    }

    return "file containers";
  }

  function closeFile(fileName: string) {
    //
  }

  function run() {
    const fileName = "no";

    try {
      console.log(readFile(fileName));
    } catch (error) {
      console.log("catched");
      return;
    } finally {
      closeFile(fileName);
      console.log("finally");
    }
  }
}
