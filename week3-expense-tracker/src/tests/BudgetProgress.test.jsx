import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import BudgetProgress from "../components/BudgetProgress";

test("renders budget usage", () => {
  render(
    <BudgetProgress
      monthlyIncome={5000}
      totalExpenses={2500}
    />
  );

  expect(
    screen.getByText(/budget usage/i)
  ).toBeInTheDocument();
});

test("handles expenses greater than income", () => {
  render(
    <BudgetProgress
      monthlyIncome={5000}
      totalExpenses={6000}
    />
  );

  expect(
    screen.getByText(/budget usage/i)
  ).toBeInTheDocument();
});

