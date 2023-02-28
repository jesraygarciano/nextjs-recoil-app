import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/todoListState";

const AddTodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newTodo.trim()) {
      return;
    }

    setTodoList((oldTodoList) => [
      ...oldTodoList,
      { id: Date.now(), text: newTodo, isComplete: false },
    ]);

    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center mt-4">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTodo}
          onChange={handleInputChange}
          className="py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 flex-grow"
        />
        <button
          type="submit"
          className="ml-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodoForm;
