import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import IncomeInput from "../components/IncomeInput";

test("renders monthly income input", () => {
  render(
    <IncomeInput
      monthlyIncome={0}
      setMonthlyIncome={() => {}}
    />
  );

  expect(
    screen.getByPlaceholderText("Enter your monthly income")
  ).toBeInTheDocument();
});

