import { useState } from "react";

const TodoAdd = ({ handleNewTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      description: todoText,
      done: false,
    };
    setTodoText("");
    handleNewTodo(newTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        value={todoText}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};

export default TodoAdd;
