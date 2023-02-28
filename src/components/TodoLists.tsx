import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoListState, filteredTodoListState } from "../store/todo";
import { TodoItem } from "./TodoItem";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const filteredTodoList = useRecoilValue(filteredTodoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: Date.now(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter a task"
          value={inputValue}
          onChange={handleChange}
          className="py-2 px-4 rounded-lg border-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
        />
        <button
          onClick={addItem}
          className="ml-2 px-4 py-2 bg-gray-800 text-white rounded-md font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!inputValue}
        >
          Add
        </button>
      </div>
      <ul>
        {filteredTodoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
