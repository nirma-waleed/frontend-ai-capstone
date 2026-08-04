import { render, screen } from "@testing-library/react";
import ExpenseForm from "../components/ExpenseForm";

test("renders Add Expense button", () => {
  render(
    <ExpenseForm
      formData={{
        description: "",
        amount: "",
        category: "",
        date: "",
      }}
      errors={{}}
      onChange={() => {}}
      onSubmit={() => {}}
      isEditing={false}
      onCancel={() => {}}
    />
  );

  expect(
    screen.getByRole("button", {
      name: /add expense/i,
    })
  ).toBeInTheDocument();
});