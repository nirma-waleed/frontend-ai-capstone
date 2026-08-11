import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import ExpenseItem from "../components/ExpenseItem";

const expense = {
  id: 1,
  description: "Grocery Shopping",
  amount: "670",
  category: "Food",
  date: "2026-08-01",
};

test("renders expense information", () => {
  render(
    <ExpenseItem
      expense={expense}
      onDelete={vi.fn()}
      onEdit={vi.fn()}
    />
  );

  expect(
    screen.getByText("Grocery Shopping")
  ).toBeInTheDocument();

  expect(
    screen.getByText("$670.00")
  ).toBeInTheDocument();

  expect(
    screen.getByText(/Food/i)
  ).toBeInTheDocument();
});

test("calls onDelete when Delete is clicked", () => {
  const onDelete = vi.fn();

  render(
    <ExpenseItem
      expense={expense}
      onDelete={onDelete}
      onEdit={vi.fn()}
    />
  );

  fireEvent.click(
    screen.getByRole("button", {
      name: /delete/i,
    })
  );

  expect(onDelete).toHaveBeenCalledWith(1);
});

test("calls onEdit when Edit is clicked", () => {
  const onEdit = vi.fn();

  render(
    <ExpenseItem
      expense={expense}
      onDelete={vi.fn()}
      onEdit={onEdit}
    />
  );

  fireEvent.click(
    screen.getByRole("button", {
      name: /edit/i,
    })
  );

  expect(onEdit).toHaveBeenCalledWith(expense);
});
