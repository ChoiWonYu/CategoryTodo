import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { TodoArr, selectedCategory } from "../atoms/atoms";
import styled from "styled-components";

interface ITODO {
  text: string;
  id: number;
  category: string;
}
const Todo = ({ text, category, id }: ITODO) => {
  const setTodo = useSetRecoilState(TodoArr);
  const selected = useRecoilValue(selectedCategory);
  const handleRemove = (id: number) => {
    setTodo((prev: ITODO[]) => {
      return prev.filter((todo: ITODO) => todo.id !== id);
    });
  };

  return (
    <Container>
      <li>{text}</li>
      <BtnContainer>
        <BtnStyled
          onClick={() => {
            handleRemove(id);
          }}
        >
          ✅
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
  background-color: ${(props) => props.theme.accentColor};
  margin: 2px;
  border: none;
  border-radius: 5px;
`;
