import { useRecoilValue, useRecoilState } from "recoil";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";
import { TodoSelector, selectedCategory, Categories } from "../atoms/atoms";
import styled from "styled-components";
import { useState } from "react";
import Modal from "./Modal";

const TodoList = () => {
  const [selected, setSelected] = useRecoilState(selectedCategory);
  const categories = useRecoilValue(Categories);
  const Todos = useRecoilValue(TodoSelector);
  const [isOpen, setIspOpen] = useState(false);
  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setSelected(e.currentTarget.value);
  };
  const openModal = () => {
    setIspOpen(true);
  };

  return (
    <Container>
      {isOpen && <Modal isOpen={setIspOpen} />}
      <CreateSeclect>
        <CreateTodo />
        <SelectStyled value={selected} onInput={onInput}>
          {categories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </SelectStyled>

        <PlusCategoryBtn onClick={openModal}>+</PlusCategoryBtn>
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
