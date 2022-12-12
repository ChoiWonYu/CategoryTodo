import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
interface IProps {
  isOpen: Dispatch<SetStateAction<boolean>>;
}
const Modal = ({ isOpen }: IProps) => {
  const [category, setCategory] = useState("");
  const closeModal = () => {
    isOpen(false);
  };
  const addCategory = () => {};
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCategory(e.currentTarget.value);
  };
  console.log(category);
  return (
    <Container>
      <ModalBackground onClick={closeModal} />
      <ModalContainer>
        <Header>
          <h1>Add a category</h1>
          <CloseBtn onClick={closeModal}>❌</CloseBtn>
        </Header>
        <FormContainer>
          <input type="text" value={category} onChange={onChange} />
          <button onClick={addCategory}>add</button>
        </FormContainer>
      </ModalContainer>
    </Container>
  );
};

export default Modal;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  left: 0;
`;
const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
`;
const CloseBtn = styled.button`
  border: none;
  background-color: white;
`;
const ModalContainer = styled.div`
  width: 250px;
  height: 100px;
  position: absolute;
  top: 200px;
  left: 40%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;
