import { render, screen } from "@testing-library/react";
import IncomeInput from "../components/IncomeInput";

test("renders monthly income input", () => {
  render(
    <IncomeInput
      monthlyIncome={5000}
      setMonthlyIncome={() => {}}
    />
  );

  expect(
    screen.getByDisplayValue("5000")
  ).toBeInTheDocument();
});