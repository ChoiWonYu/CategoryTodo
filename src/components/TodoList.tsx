import { useRecoilValue, useRecoilState } from "recoil";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";
import { TodoSelector, Category, Categories } from "../atoms/atoms";

const TodoList = () => {
  const [category, setCategory] = useRecoilState(Category);
  const Todos = useRecoilValue(TodoSelector);
  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as Categories);
  };
  return (
    <>
      <CreateTodo />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>{Categories.TO_DO}</option>
        <option value={Categories.Done}>{Categories.Done}</option>
        <option value={Categories.Doing}>{Categories.Doing}</option>
      </select>
      <ul>
        {Todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
