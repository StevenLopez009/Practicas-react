import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import LoginPage from "../../src/09-useContext/LoginPage";

describe("Pruebas en <LoginPage/>", () => {
  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null, setUser: jest.fn() }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("Debe de llamar el setUser cuando se hace click en el boton", () => {
    const mockUser = { id: 123, name: "Juan", email: "juan@gmail.com" };
    const mockSetUser = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: mockSetUser }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockSetUser).toHaveBeenCalledWith(mockUser);
  });
});
