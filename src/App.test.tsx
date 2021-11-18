import { render, screen } from "@testing-library/react";

import { App } from "./App";

test("adds 1 + 2 to equal 3", () => {
  render(<App />);
  expect(screen.getByText("Hello Vite + React!")).toBeInTheDocument();
});
