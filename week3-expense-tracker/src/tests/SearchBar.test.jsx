import { render, screen } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

test("renders search input", () => {
  render(
    <SearchBar
      searchTerm=""
      setSearchTerm={() => {}}
    />
  );

  expect(
    screen.getByPlaceholderText(/search by description/i)
  ).toBeInTheDocument();
});