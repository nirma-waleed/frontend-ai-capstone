import ExpenseItem from './ExpenseItem'

function ExpenseList({ expenses, onDelete, onEdit }) {
  return (
    <section className="expense-list-section" aria-labelledby="expense-list-title">
      <div className="section-heading">
        <h2 id="expense-list-title">Recent expenses</h2>
        <p>{expenses.length} item(s)</p>
      </div>

      {expenses.length === 0 ? (
        <p className="empty-state"> No expenses found. <br />Add your first expense to start tracking your spending.</p>
      ) : (
        <ul className="expense-list">
          {expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} onEdit={onEdit} />
          ))}
        </ul>
      )}
    </section>
  )
}

export default ExpenseList
