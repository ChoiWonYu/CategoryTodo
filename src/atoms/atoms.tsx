import { atom, selector } from "recoil";

interface ITODO {
  text: string;
  id: number;
  category: string;
}

export const Category = atom({
  key: "Category",
  default: "TO_DO",
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
//selectedCategory atom 만들어서 해결
//effects props 이용 로컬스토리지
