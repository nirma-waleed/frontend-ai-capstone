import { render, screen } from "@testing-library/react";
import FilterBar from "../components/FilterBar";

test("renders category filter", () => {
  render(
    <FilterBar
      selectedCategory="All"
      setSelectedCategory={() => {}}
    />
  );

  expect(
    screen.getByLabelText(/filter by category/i)
  ).toBeInTheDocument();
});