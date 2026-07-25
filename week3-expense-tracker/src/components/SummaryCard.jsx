function SummaryCard({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0)

  return (
    <section className="summary-card" aria-labelledby="summary-title">
      <h2 id="summary-title">Overview</h2>
      <div className="summary-stats">
        <div>
          <p className="summary-label">Total spent</p>
          <p className="summary-value">${total.toFixed(2)}</p>
        </div>
        <div>
          <p className="summary-label">Entries</p>
          <p className="summary-value">{expenses.length}</p>
        </div>
      </div>
    </section>
  )
}

export default SummaryCard
