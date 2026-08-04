import { render, screen } from "@testing-library/react";
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