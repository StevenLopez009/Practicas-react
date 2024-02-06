import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import useTodo from "../hooks/useTodo";

const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleToggleTodo,
    handleDeleteTodo,
  } = useTodo();
  return (
    <>
      <h1>
        TodApp: {todosCount}
        <small>pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
