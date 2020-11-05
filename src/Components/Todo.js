import React from "react";

const Todo = ({ id, text, completed, todos, setTodos }) => {
  // FUNCTIONS
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  // RENDER
  return (
    <div className="todo">
      <li className={`todo-item ${completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
