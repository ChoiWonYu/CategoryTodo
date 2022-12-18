import { atom, selector } from "recoil";

interface ITODO {
  text: string;
  id: number;
  category: string;
}

const dataEffect =
  (key: string) =>
  ({ onSet, setSelf }: any) => {
    const data = localStorage.getItem(key);
    if (data !== null) {
      setSelf(JSON.parse(data));
    }
    onSet((newValue: any) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const selectedCategory = atom({
  key: "selectedCategaory",
  default: "normal",
});
export const Categories = atom({
  key: "Categories",
  default: ["normal"],
  effects: [dataEffect("Categories")],
});

export const TodoArr = atom<ITODO[]>({
  key: "todoArr",
  default: [],
  effects: [dataEffect("TodoList")],
});
export const TodoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const toDos = get(TodoArr);
    const category = get(selectedCategory);
    return toDos.filter((todo) => todo.category === category);
  },
});
//effects props 이용 로컬스토리지
