import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  render(<App />);
  const filterHeading = screen.queryAllByRole("heading", { name: /Filter By/i });
  expect(filterHeading.length).toBeGreaterThan(0);
});

test("changes page number when'Next' is clicke", () => {
  render(<App />);
  const nextBtn = screen.getByText("Next");
  fireEvent.click(nextBtn);
  expect(screen.getByText("2")).toBeInTheDocument();
});

test("disable 'Prev' button on the first page", () => {
  render(<App />);
  const prevBtn = screen.getByText("Prev");
  expect(prevBtn).toBeDisabled();
});
