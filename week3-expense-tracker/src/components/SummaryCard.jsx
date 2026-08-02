function SummaryCard({
  monthlyIncome,
  totalExpenses,
  balance,
  totalEntries,
}) {
  return (
    <section className="summary-card" aria-labelledby="summary-title">
      <h2 id="summary-title">Expense Dashboard</h2>

      <div className="summary-grid">
        <div className="summary-box">
          <h3> Monthly Income</h3>
          <p>${monthlyIncome.toFixed(2)}</p>
        </div>

        <div className="summary-box">
          <h3> Total Expenses</h3>
          <p>${totalExpenses.toFixed(2)}</p>
        </div>

        <div className="summary-box">
          <h3> Remaining Balance</h3>
          <p>${balance.toFixed(2)}</p>
        </div>

        <div className="summary-box">
          <h3> Total Entries</h3>
          <p>{totalEntries}</p>
        </div>
      </div>
    </section>
  )
}

export default SummaryCard