import React from "react";
import { useSetRecoilState } from "recoil";
import { TodoArr, Categories } from "../atoms/atoms";

interface ITODO {
  text: string;
  id: number;
  category: Categories;
}
const Todo = ({ text, category, id }: ITODO) => {
  const setTodo = useSetRecoilState(TodoArr);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodo((prev) => {
      const targetIdx = prev.findIndex((todo) => todo.id === id);
      const newTodo = { text, id, category: name as any };
      return [
        ...prev.slice(0, targetIdx),
        newTodo,
        ...prev.slice(targetIdx + 1),
      ];
    });
  };
  return (
    <>
      <li>{text}</li>
      {category !== Categories.Doing && (
        <button name={Categories.Doing} onClick={handleClick}>
          {Categories.Doing}
        </button>
      )}
      {category !== Categories.Done && (
        <button name={Categories.Done} onClick={handleClick}>
          {Categories.Done}
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={handleClick}>
          {Categories.TO_DO}
        </button>
      )}
    </>
  );
};

export default Todo;
