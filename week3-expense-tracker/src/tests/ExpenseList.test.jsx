import { render, screen } from "@testing-library/react";
import ExpenseList from "../components/ExpenseList";

const expenses = [
  {
    id: 1,
    description: "Burger",
    amount: "10",
    category: "Food",
    date: "2026-08-01",
  },
];

test("renders expense list", () => {
  render(
    <ExpenseList
      expenses={expenses}
      onDelete={() => {}}
      onEdit={() => {}}
    />
  );

  expect(
    screen.getByText("Burger")
  ).toBeInTheDocument();
});