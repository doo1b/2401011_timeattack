"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import TodoInput from "../_components/TodoInput";
import TodoList from "../_components/TodoList";
import DoneList from "../_components/DoneList";

export type TodoType = {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
};

const TodosPage = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const response = await axios.get("http://localhost:4000/todos");
      setTodos(response.data);
    };

    getTodos();
  }, []);

  const handleDelete = (id: string) => {
    axios.delete(`http://localhost:4000/todos/${id}`);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleDonePatch = (patchTodo: TodoType) => {
    axios.patch(`http://localhost:4000/todos/${patchTodo.id}`, {
      isDone: !patchTodo.isDone,
    });
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === patchTodo.id ? { ...todo, isDone: !patchTodo.isDone } : todo
      )
    );
  };

  const completedTodos = todos.filter((todo) => todo.isDone === true);
  const incompleteTodos = todos.filter((todo) => todo.isDone === false);

  return (
    <div>
      <TodoInput setTodos={setTodos} />
      <TodoList
        todos={completedTodos}
        onPatchTodo={handleDonePatch}
        onDelete={handleDelete}
      />
      <DoneList
        todos={incompleteTodos}
        onPatchTodo={handleDonePatch}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default TodosPage;
