import { MemoryRouter } from "react-router-dom";
import MainApp from "../../src/09-useContext/MainApp";
import { render } from "@testing-library/react";

describe("Pruebas en <MainApp/>", () => {
  test("Debe de mostrar el HomePage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  test("Debe de mostrar el LoginPage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("LoginPage")).toBeTruthy();
  });
});
