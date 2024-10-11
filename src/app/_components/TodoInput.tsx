import axios from "axios";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { TodoType } from "../todos/page";

type newTodo = {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
};

type inputProps = {
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
};

const TodoInput = ({ setTodos }: inputProps) => {
  const newId = () => {
    return Math.random().toString(36).substr(2, 4).toUpperCase();
  };

  const initTodo = {
    id: newId(),
    isDone: false,
    title: "",
    contents: "",
  };

  const handlePostTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post("http://localhost:4000/todos", newTodo);
    setTodos((prev) => [...prev, newTodo]);
    setNewTodo(initTodo);
  };

  const [newTodo, setNewTodo] = useState<newTodo>(initTodo);

  return (
    <div>
      <form onSubmit={(e) => handlePostTodo(e)}>
        <label>
          제목
          <input
            type="text"
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
            value={newTodo.title}
          />
        </label>
        <label>
          내용
          <input
            type="text"
            onChange={(e) =>
              setNewTodo({ ...newTodo, contents: e.target.value })
            }
            value={newTodo.contents}
          />
        </label>
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
};

export default TodoInput;
