import { useRecoilValue } from "recoil";
import { todoListState } from "../atoms/todoListState";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div className="flex flex-col mt-4">
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
};

export default TodoList;
