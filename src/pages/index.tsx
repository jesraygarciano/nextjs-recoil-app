import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { todoListState, Todo } from "../lib/todoListState";

type TodoItemProps = {
  id: number;
};

const TodoItem = ({ id }: TodoItemProps) => {
  const todo = useRecoilValue<Todo>(todoListState(id));
  const setTodoList = useSetRecoilState<Todo[]>(todoListState);

  const handleDelete = () => {
    setTodoList((oldTodoList) => {
      return oldTodoList.filter((todo) => todo.id !== id);
    });
  };

  const handleCompleteToggle = () => {
    setTodoList((oldTodoList) => {
      const newTodoList = [...oldTodoList];
      const index = newTodoList.findIndex((todo) => todo.id === id);
      newTodoList[index] = {
        ...todo,
        isComplete: !todo.isComplete,
      };
      return newTodoList;
    });
  };

  return (
    <li className="flex items-center justify-between py-2">
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={handleCompleteToggle}
        className="mr-4"
      />
      <span className={todo.isComplete ? "line-through" : ""}>{todo.text}</span>
      <button onClick={handleDelete} className="text-red-500">
        Delete
      </button>
    </li>
  );
};

const TodoList = () => {
  const todoList = useRecoilValue<Todo[]>(todoListState);

  return (
    <ul className="mt-4">
      {todoList.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} />
      ))}
    </ul>
  );
};

const AddTodoForm = () => {
  const [text, setText] = React.useState<string>("");
  const setTodoList = useSetRecoilState<Todo[]>(todoListState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: Date.now(),
        text,
        isComplete: false,
      },
    ]);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button className="bg-green-500 text-white p-2 rounded ml-4">
        Add Todo
      </button>
    </form>
  );
};

const Home = () => {
  return (
    <div className="max-w-lg mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default Home;
