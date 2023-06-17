type Position = "up" | "down" | "left" | "right";

let position = { x: 0, y: 0 };
function move(move: Position) {
  switch (move) {
    case "up":
      position.y += 1;
      break;
    case "down":
      position.y -= 1;
      break;
    case "right":
      position.x += 1;
      break;
    case "left":
      position.x -= 1;
      break;

    default:
      throw new Error("no position");
  }
}

console.log(position);
move("up");
console.log(position);
move("down");
console.log(position);
move("left");
console.log(position);
move("right");
console.log(position);
