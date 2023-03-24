import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

type initialType = {
  id: string;
  title: string;
};

const initialState: initialType[] = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const newItem = { id: v4(), title: action.payload };
      state.push(newItem);
    },
    remove: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export default todoSlice.reducer;

export const { add,remove } = todoSlice.actions;
