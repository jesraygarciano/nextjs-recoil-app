import { useSetRecoilState } from "recoil";
import { Todo } from "../lib/types";
import { todoListState } from "../lib/todoListState";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { id, text, isComplete } = todo;
  const setTodoList = useSetRecoilState(todoListState);

  const handleToggle = () => {
    setTodoList((oldTodoList) =>
      oldTodoList.map((t) => {
        if (t.id === id) {
          return { ...t, isComplete: !t.isComplete };
        }
        return t;
      })
    );
  };

  const handleDelete = () => {
    setTodoList((oldTodoList) => oldTodoList.filter((t) => t.id !== id));
  };

  return (
    <div className="flex items-center justify-between py-2 border-b">
      <label htmlFor={id} className="inline-flex items-center cursor-pointer">
        <input
          id={id}
          type="checkbox"
          checked={isComplete}
          onChange={handleToggle}
          className="form-checkbox h-6 w-6 text-indigo-600 transition duration-150 ease-in-out"
        />
        <span className="ml-3 text-sm">{text}</span>
      </label>
      <button
        type="button"
        onClick={handleDelete}
        className="text-sm text-red-600"
      >
        Delete
      </button>
    </div>
  );
};
