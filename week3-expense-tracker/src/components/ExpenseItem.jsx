function ExpenseItem({ expense, onDelete, onEdit }) {
  return (
    <li className="expense-item">
      <div>
        <p className="expense-title">{expense.description}</p>
        <p className="expense-meta">
          {expense.category} • {expense.date}
        </p>
      </div>

      <div className="expense-actions">
        <span className="expense-amount">${Number(expense.amount).toFixed(2)}</span>
        <div className="action-buttons">
          <button type="button" className="edit-btn" onClick={() => onEdit(expense)}>
            Edit
          </button>
          <button type="button" className="delete-btn" onClick={() => onDelete(expense.id)}>
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default ExpenseItem
