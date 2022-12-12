import { useRecoilValue, useRecoilState } from "recoil";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";
import { TodoSelector, Category, Categories } from "../atoms/atoms";
import styled from "styled-components";

const TodoList = () => {
  const [category, setCategory] = useRecoilState(Category);
  const Todos = useRecoilValue(TodoSelector);
  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as Categories);
  };
  return (
    <Container>
      <CreateSeclect>
        <CreateTodo />
        <SelectStyled value={category} onInput={onInput}>
          <option value={Categories.TO_DO}>{Categories.TO_DO}</option>
          <option value={Categories.Done}>{Categories.Done}</option>
          <option value={Categories.Doing}>{Categories.Doing}</option>
        </SelectStyled>
        <PlusCategoryBtn>+</PlusCategoryBtn>
      </CreateSeclect>
      <TodoContainer>
        {Todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </TodoContainer>
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CreateSeclect = styled.div`
  display: flex;
  margin: 100px 0 20px 0;
`;

const SelectStyled = styled.select`
  background-color: ${(props) => props.theme.secondColor};
  border-radius: 10px 0 0 10px;
  margin: 0 0 0 10px;
  border: none;
`;
const TodoContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const PlusCategoryBtn = styled.button`
  background-color: ${(props) => props.theme.secondColor};
  border: none;
  border-radius: 0 10px 10px 0;
`;
