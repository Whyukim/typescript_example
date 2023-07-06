{
  type Todo = {
    title: string;
    description: string;
    lael: string;
    arrow: "up" | "down" | "left" | "right";
  };

  function updateTodo(todo: Todo, feildsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...feildsToUpdate };
  }

  const todo: Todo = {
    title: "hello",
    description: "world",
    lael: "label",
    arrow: "down",
  };
  console.log(todo);
  const updated = updateTodo(todo, { title: "new" });
  console.log(updated);
}
