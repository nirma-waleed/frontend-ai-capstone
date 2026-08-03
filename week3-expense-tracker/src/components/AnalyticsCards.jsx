function AnalyticsCards({ expenses }) {
  if (expenses.length === 0) {
    return null
  }

  // Highest expense
  const highestExpense = expenses.reduce((max, expense) =>
    Number(expense.amount) > Number(max.amount) ? expense : max
  )

  // Average expense
  const averageExpense =
    expenses.reduce((sum, expense) => sum + Number(expense.amount), 0) /
    expenses.length

  // Latest expense
  const latestExpense = expenses[0]

  // Category totals
  const categoryTotals = {}

  expenses.forEach((expense) => {
    categoryTotals[expense.category] =
      (categoryTotals[expense.category] || 0) +
      Number(expense.amount)
  })

  const topCategory = Object.keys(categoryTotals).reduce((a, b) =>
    categoryTotals[a] > categoryTotals[b] ? a : b
  )

  return (
    <section className="analytics-section">
      <h2>Dashboard Analytics</h2>

      <div className="analytics-grid">

        <div className="analytics-card">
          <h3> Top Category</h3>
          <p>{topCategory}</p>
        </div>

        <div className="analytics-card">
          <h3> Highest Expense</h3>
          <p>{highestExpense.description}</p>
          <strong>${Number(highestExpense.amount).toFixed(2)}</strong>
        </div>

        <div className="analytics-card">
          <h3> Average Expense</h3>
          <strong>${averageExpense.toFixed(2)}</strong>
        </div>

        <div className="analytics-card">
          <h3> Latest Expense</h3>
          <p>{latestExpense.description}</p>
        </div>

      </div>
    </section>
  )
}

export default AnalyticsCards