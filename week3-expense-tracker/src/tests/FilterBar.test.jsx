import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest";
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

test("changes selected category", () => {
  const setSelectedCategory = vi.fn();

  render(
    <FilterBar
      selectedCategory="All"
      setSelectedCategory={setSelectedCategory}
    />
  );

  const select = screen.getByLabelText(
    /filter by category/i
  );

  fireEvent.change(select, {
    target: {
      value: "Food",
    },
  });

  expect(
    setSelectedCategory
  ).toHaveBeenCalledWith("Food");
});
