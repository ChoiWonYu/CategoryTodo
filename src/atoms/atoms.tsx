import { atom, selector } from "recoil";
export enum Categories {
  "TO_DO" = "TO_DO",
  "Doing" = "Doing",
  "Done" = "Done",
}

interface ITODO {
  text: string;
  id: number;
  category: Categories;
}

export const Category = atom({
  key: "Category",
  default: Categories.TO_DO,
});

export const TodoArr = atom<ITODO[]>({
  key: "todoArr",
  default: [],
});
export const TodoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const toDos = get(TodoArr);
    const category = get(Category);
    return toDos.filter((todo) => todo.category === category);
  },
});
