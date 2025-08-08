import React from 'react'

function EnumGenerics() {
  enum Direction {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right",
  }
  function move(way: Direction) {
    console.log(way);
  }
  move(Direction.Up);
  move(Direction.Down);
  move(Direction.Left);
  move(Direction.Right);
 type inputType = string | number;
  function returnValues<T>(args: T): T {
    return args;
  }
  const str = returnValues<string>("str");
  str.toUpperCase();
  const num = returnValues<number>(1222);
  console.log(num);
  console.log(str);

  // Return First Value of Element using Generics:

  function firstElement<T>(args: T[]): T {
    return args[0];
  }
  const first = firstElement<number>([23, 27, 63, 41, 85]);
  const second = firstElement<string>(["first", "2nd", "Third"]);
  console.log(first);
  console.log(second.toUpperCase());
  return (
    <div>Enum&Generics</div>
  )
}

export default EnumGenerics