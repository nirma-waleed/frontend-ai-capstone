function SmartInsights({
  expenses,
  monthlyIncome,
  totalExpenses,
  balance,
}) {
  if (expenses.length === 0) {
    return null
  }

  const categoryTotals = {}

  expenses.forEach((expense) => {
    categoryTotals[expense.category] =
      (categoryTotals[expense.category] || 0) +
      Number(expense.amount)
  })

  const topCategory = Object.keys(categoryTotals).reduce((a, b) =>
    categoryTotals[a] > categoryTotals[b] ? a : b
  )

  const topAmount = categoryTotals[topCategory]

  const percentage = ((topAmount / totalExpenses) * 100).toFixed(1)

  const insights = []

  insights.push(
    `You spent the most on ${topCategory} ($${topAmount.toFixed(2)}).`
  )

  insights.push(
    `${topCategory} accounts for ${percentage}% of your total expenses.`
  )

  if (balance > monthlyIncome * 0.5) {
    insights.push(
      'Excellent! More than half of your monthly income is still available.'
    )
  } else if (balance > 0) {
    insights.push(
      'Your remaining balance is getting lower. Monitor your spending.'
    )
  } else {
    insights.push(
      'Warning! Your expenses have exceeded your monthly income.'
    )
  }

  if (percentage > 50) {
    insights.push(
      `Consider reducing your ${topCategory} spending to improve your savings.`
    )
  } else {
    insights.push(
      'Your spending is well distributed across categories.'
    )
  }

  return (
    <section className="insights-card">
      <h2> Smart Spending Insights</h2>

      <ul>
        {insights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default SmartInsights