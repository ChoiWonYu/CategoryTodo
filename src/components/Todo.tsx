import React from "react";
import { useSetRecoilState } from "recoil";
import { TodoArr, Categories } from "../atoms/atoms";
import styled from "styled-components";

interface ITODO {
  text: string;
  id: number;
  category: Categories;
}
const Todo = ({ text, category, id }: ITODO) => {
  const setTodo = useSetRecoilState(TodoArr);
  const handleRemove = (id: number) => {
    setTodo((prev: ITODO[]) => {
      return prev.filter((todo: ITODO) => todo.id !== id);
    });
  };
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
    <Container>
      <li>{text}</li>
      <BtnContainer>
        {category !== Categories.Doing && (
          <BtnStyled name={Categories.Doing} onClick={handleClick}>
            {Categories.Doing}
          </BtnStyled>
        )}
        {category !== Categories.Done && (
          <BtnStyled name={Categories.Done} onClick={handleClick}>
            {Categories.Done}
          </BtnStyled>
        )}
        {category !== Categories.TO_DO && (
          <BtnStyled name={Categories.TO_DO} onClick={handleClick}>
            {Categories.TO_DO}
          </BtnStyled>
        )}
        <BtnStyled
          onClick={() => {
            handleRemove(id);
          }}
        >
          🗑️
        </BtnStyled>
      </BtnContainer>
    </Container>
  );
};

export default Todo;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.accentColor};
  height: 45px;
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  padding: 10px;
  margin: 0 0 15px 0;
`;
const BtnContainer = styled.div``;

const BtnStyled = styled.button`
  background-color: white;
  margin: 2px;
  border: none;
  border-radius: 5px;
`;
