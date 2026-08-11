import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import SearchBar from "../components/SearchBar";

test("renders search input", () => {
  render(
    <SearchBar
      searchTerm=""
      setSearchTerm={() => {}}
    />
  );

  expect(
    screen.getByPlaceholderText(
      /search by description/i
    )
  ).toBeInTheDocument();
});

test("updates search term when user types", () => {
  const setSearchTerm = vi.fn();

  render(
    <SearchBar
      searchTerm=""
      setSearchTerm={setSearchTerm}
    />
  );

  const input = screen.getByPlaceholderText(
    /search by description/i
  );

  fireEvent.change(input, {
    target: {
      value: "Grocery",
    },
  });

  expect(
    setSearchTerm
  ).toHaveBeenCalledWith("Grocery");
});

