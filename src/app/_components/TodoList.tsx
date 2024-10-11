import { TodoType } from "../todos/page";
import Todo from "./Todo";

type TodoProps = {
  todos: TodoType[];
  onPatchTodo: (todo: TodoType) => void;
  onDelete: (id: string) => void;
};

const TodoList = ({ todos, onPatchTodo, onDelete }: TodoProps) => {
  return (
    <>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          onPatchTodo={onPatchTodo}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default TodoList;
