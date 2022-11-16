import React from "react";
import { useRecoilValue } from "recoil";
import { TodoArr } from "../atoms/atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const TodoList = () => {
  const Todos = useRecoilValue(TodoArr);
  return (
    <>
      <CreateTodo />
      <ul>
        {Todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
