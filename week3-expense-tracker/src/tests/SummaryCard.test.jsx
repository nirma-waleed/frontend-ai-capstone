import { render, screen } from "@testing-library/react"
import { test, expect } from "vitest"
import SummaryCard from "../components/SummaryCard"

test("renders dashboard heading", () => {
  render(
    <SummaryCard
      monthlyIncome={5000}
      totalExpenses={1000}
      balance={4000}
      totalEntries={5}
    />
  )

  expect(
    screen.getByText(/Expense Dashboard/i)
  ).toBeInTheDocument()
})