import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import SmartInsights from "../components/SmartInsights";

test("renders smart insights", () => {
  render(
    <SmartInsights
      expenses={[
        {
          id: 1,
          description: "Electricity",
          amount: "100",
          category: "Bills",
          date: "2026-08-01",
        },
      ]}
      monthlyIncome={5000}
    />
  );

  expect(
    screen.getByText(/smart spending insights/i)
  ).toBeInTheDocument();
});