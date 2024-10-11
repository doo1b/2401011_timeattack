import { TodoType } from "../todos/page";

type TodoProps = {
  todo: TodoType;
  onPatchTodo: (todo: TodoType) => void;
  onDelete: (id: string) => void;
};

const Todo = ({ todo, onPatchTodo, onDelete }: TodoProps) => {
  return (
    <div>
      <p>{todo.title}</p>
      <p>{todo.contents}</p>
      <button onClick={() => onPatchTodo(todo)}>
        {todo.isDone ? "취소" : "완료"}
      </button>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </div>
  );
};

export default Todo;
