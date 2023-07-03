{
  // index type
  const obj = {
    name: "helo",
  };
  obj.name; // helo
  obj["name"]; // helo

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };
  type Name = Animal["name"]; // string
  const text: Name = "world";

  type Gender = Animal["gender"]; // male | female

  type Keys = keyof Animal; // name | age | gender
  const keys: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "per",
    gender: "female",
  };
}
