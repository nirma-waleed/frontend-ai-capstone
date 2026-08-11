function BudgetProgress({ monthlyIncome, totalExpenses }) {
  const percentage =
    monthlyIncome > 0
      ? (totalExpenses / monthlyIncome) * 100
      : 0

  let message = 'Great! You are within your monthly budget.'
  let color = '#22c55e'

  if (percentage >= 50 && percentage < 80) {
    message = 'Be careful! You are using your budget quickly.'
    color = '#f59e0b'
  }

  if (percentage >= 80 && percentage < 100) {
    message = 'Warning! You are close to your monthly budget.'
    color = '#ef4444'
  }

  if (percentage >= 100) {
    message = 'Your expenses have exceeded your monthly income.'
    color = '#dc2626'
  }

  const displayPercentage = Math.min(percentage, 100)

  return (
    <section className="budget-progress" aria-labelledby="budget-title">
      <h2 id="budget-title">Budget Usage</h2>

      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={displayPercentage}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Monthly budget usage"
      >
        <div
          className="progress-fill"
          style={{
            width: `${displayPercentage}%`,
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