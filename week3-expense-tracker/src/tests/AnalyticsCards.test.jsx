import { render, screen } from "@testing-library/react";
import AnalyticsCards from "../components/AnalyticsCards";

test("renders analytics section", () => {
  render(
    <AnalyticsCards
      expenses={[
        {
          id: 1,
          description: "Burger",
          amount: "20",
          category: "Food",
          date: "2026-08-01",
        },
      ]}
    />
  );

  expect(
    screen.getByText(/dashboard analytics/i)
  ).toBeInTheDocument();
});