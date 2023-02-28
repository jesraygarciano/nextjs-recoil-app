import { useRecoilValue } from "recoil";
import { todoListState } from "../atoms/todoListState";
import TodoItem, { Todo } from "./TodoItem";

const TodoList = (): JSX.Element => {
  const todoList: Todo[] = useRecoilValue<Todo[]>(todoListState);

  return (
    <div className="flex flex-col mt-4">
      {todoList.map((todoItem: Todo) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
};

export default TodoList;
