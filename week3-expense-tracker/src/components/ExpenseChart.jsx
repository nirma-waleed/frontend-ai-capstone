import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

import { Pie } from 'react-chartjs-2'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

function ExpenseChart({ expenses }) {
  const categories = ['Food', 'Transport', 'Shopping', 'Bills', 'Other']

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses',
        data: categories.map(category =>
          expenses
            .filter(expense => expense.category === category)
            .reduce(
              (sum, expense) => sum + Number(expense.amount),
              0
            )
        ),
        backgroundColor: [
          '#3B82F6', // Blue
          '#10B981', // Green
          '#F59E0B', // Orange
          '#EF4444', // Red
          '#8B5CF6', // Purple
        ],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  }

  return (
    <section className="chart-section">
      <h2>Expense Breakdown</h2>

      <Pie data={data} />
    </section>
  )
}

export default ExpenseChart