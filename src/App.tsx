import React, { useState } from "react";
import { add, remove } from "./feature/todo/todoSlice";
import { useAppDispatch, useAppSelector } from "./store/store";

const App = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  const onSave = () => {
    dispatch(add(title));
    setTitle("");
  };

  const onDelete = (id: string) => {
    dispatch(remove(id));
  };

  const data = useAppSelector((state) => state.todo);
  return (
    <>
      <input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={onSave}>save</button>

      <ul>
        {data &&
          data.map((item) => (
            <li key={item.id}>
              <span>{item.title}</span>
              <button onClick={() => onDelete(item.id)}>delete</button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default App;
