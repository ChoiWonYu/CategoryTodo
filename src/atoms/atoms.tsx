import { atom } from "recoil";
interface ITODO {
  text: string;
  id: number;
  category: "TO_DO" | "Doing" | "Done";
}

export const TodoArr = atom<ITODO[]>({
  key: "todoArr",
  default: [],
});
