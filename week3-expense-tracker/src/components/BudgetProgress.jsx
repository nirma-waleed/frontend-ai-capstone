function BudgetProgress({ monthlyIncome, totalExpenses }) {
  const percentage =
    monthlyIncome > 0
      ? Math.min((totalExpenses / monthlyIncome) * 100, 100)
      : 0

  let message = 'Great! You are within your monthly budget.'
  let color = '#22c55e'

  if (percentage >= 50 && percentage < 80) {
    message = 'Be careful! You are using your budget quickly.'
    color = '#f59e0b'
  }

  if (percentage >= 80) {
    message = 'Warning! You are close to your monthly budget.'
    color = '#ef4444'
  }

  return (
    <section className="budget-card">
      <h2>Budget Usage</h2>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>

      <p>
        <strong>{percentage.toFixed(1)}%</strong> Used
      </p>

      <p style={{ color }}>{message}</p>
    </section>
  )
}

export default BudgetProgress