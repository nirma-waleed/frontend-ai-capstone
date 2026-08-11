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
          <h3 id="monthly-income-label">Monthly Income</h3>
          <p aria-labelledby="monthly-income-label">
            ${monthlyIncome.toFixed(2)}
          </p>
        </div>

        <div className="summary-box">
          <h3 id="total-expenses-label">Total Expenses</h3>
          <p aria-labelledby="total-expenses-label">
            ${totalExpenses.toFixed(2)}
          </p>
        </div>

        <div className="summary-box">
          <h3 id="remaining-balance-label">Remaining Balance</h3>
          <p aria-labelledby="remaining-balance-label">
            ${balance.toFixed(2)}
          </p>
        </div>

        <div className="summary-box">
          <h3 id="total-entries-label">Total Entries</h3>
          <p aria-labelledby="total-entries-label">
            {totalEntries}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SummaryCard
