import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks";
import { act } from "react-dom/test-utils";

describe("Pruebas en el useForm", () => {
  const initialForm = {
    name: "Steven",
    email: "Steven@google.com",
  };

  test("Debe de regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("Debe de cambiar el nombre del formulario", () => {
    const newValue = "Juan";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
    });

    expect(result.current.formState.name) === newValue;
    expect(result.current.name) === newValue;
  });

  test("Debe de resetear el formulario", () => {
    const newValue = "Juan";
    const { result } = renderHook(() => useForm(initialForm));
    const { onResetForm } = result.current;

    act(() => {
      onResetForm();
    });

    expect(result.current.formState.name).toBe(initialForm.name);
    expect(result.current.name).toBe(initialForm.name);
  });
});
