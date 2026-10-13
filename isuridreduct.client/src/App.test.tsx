import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Redux React heading", () => {
  render(<App />);
  const heading = screen.getByText(/Redux React/i);
  expect(heading).toBeInTheDocument();
});
