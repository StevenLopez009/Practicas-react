import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/TodoReducer";

const useTodo = () => {
  const initialState = [
    {
      //id: new Date().getTime(),
      //description: todoText,
      //done: false,
    },
  ];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "AddTodo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "ToggleTodo",
      payload: id,
    });
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "RemoveTodo",
      payload: id,
    });
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleToggleTodo,
    handleDeleteTodo,
  };
};

export default useTodo;
