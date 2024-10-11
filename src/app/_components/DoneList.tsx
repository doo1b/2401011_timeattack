import { TodoType } from "../todos/page";
import Todo from "./Todo";

type DoneProps = {
  todos: TodoType[];
  onPatchTodo: (todo: TodoType) => void;
  onDelete: (id: string) => void;
};

const DoneList = ({ todos, onPatchTodo, onDelete }: DoneProps) => {
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

export default DoneList;
