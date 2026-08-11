import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import SummaryCard from "../components/SummaryCard";

test("renders dashboard heading and summary values", () => {
  render(
    <SummaryCard
      monthlyIncome={5000}
      totalExpenses={1000}
      balance={4000}
      totalEntries={5}
    />
  );

  expect(
    screen.getByText(/expense dashboard/i)
  ).toBeInTheDocument();

  expect(
    screen.getByText("$5000.00")
  ).toBeInTheDocument();

  expect(
    screen.getByText("$1000.00")
  ).toBeInTheDocument();

  expect(
    screen.getByText("$4000.00")
  ).toBeInTheDocument();

  expect(
    screen.getByText("5")
  ).toBeInTheDocument();
});

