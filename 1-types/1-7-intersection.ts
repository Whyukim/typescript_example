{
  // Intersection Types: AND(&)

  type Student = {
    name: string;
    age: number;
  };
  type Worker = {
    id: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.age);
  }
}
