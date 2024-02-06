import { todoReducer } from "../../src/08-useReducer/TodoReducer";

describe("Pruebas en todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];
  test("Debe de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });
  test("Debe de agregar un todo", () => {
    const action = {
      type: "AddTodo",
      payload: {
        id: 2,
        description: "Nuevo",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("Debe de eliminar un todo", () => {
    const action = {
      type: "RemoveTodo",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });

  test("Debe de realizar el Toggle del todo", () => {
    const action = {
      type: "ToggleTodo",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    const toggledTodo = newState.find((todo) => todo.id === action.payload);

    expect(toggledTodo.done).toBe(true);
  });
});
