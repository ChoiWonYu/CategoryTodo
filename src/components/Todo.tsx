import React from "react";
interface ITODO {
  text: string;
  id: number;
  category: "TO_DO" | "Doing" | "Done";
}
const Todo = ({ text }: ITODO) => {
  return (
    <>
      <li>{text}</li>
      <button>Doing</button>
      <button>ToDo</button>
      <button>Done</button>
    </>
  );
};

export default Todo;
