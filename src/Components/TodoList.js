import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  // RENDER
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
