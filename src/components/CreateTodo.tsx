import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { TodoArr } from "../atoms/atoms";

interface IForm {
  todo: string;
}

const CreateTodo = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [tdArr, setTdArr] = useRecoilState(TodoArr);

  const handleValid = ({ todo }: IForm) => {
    setTdArr((prev) => {
      return [
        {
          text: todo,
          id: Date.now(),
          category: "TO_DO",
        },
        ...prev,
      ];
    });
    setValue("todo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        type={"text"}
        {...register("todo", { required: "Please write a To Do" })}
        placeholder="Write a to do"
      />
      <button>plus</button>
    </form>
  );
};

export default CreateTodo;
