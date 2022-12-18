import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { TodoArr, selectedCategory } from "../atoms/atoms";
import styled from "styled-components";

interface IForm {
  todo: string;
}
const CreateTodo = () => {
  const category = useRecoilValue(selectedCategory);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [tdArr, setTdArr] = useRecoilState(TodoArr);

  const handleValid = ({ todo }: IForm) => {
    setTdArr((prev) => {
      return [
        {
          text: todo,
          id: Date.now(),
          category: category,
          isDone: false,
        },
        ...prev,
      ];
    });
    setValue("todo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <InputStyled
        type={"text"}
        {...register("todo", { required: "Please write a To Do" })}
        placeholder="Write a to do"
      />
      <BtnStyled>add</BtnStyled>
    </form>
  );
};

export default CreateTodo;
const BtnStyled = styled.button`
  background-color: ${(props) => props.theme.secondColor};
  border: none;
  height: 35px;
  border-radius: 0 10px 10px 0;
`;
const InputStyled = styled.input`
  border: none;
  height: 35px;
  border-radius: 10px 0 0 10px;
`;
