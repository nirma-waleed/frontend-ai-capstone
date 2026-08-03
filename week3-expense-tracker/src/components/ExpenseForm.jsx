function ExpenseForm({ formData, errors, onChange, onSubmit, isEditing, onCancel }) {
  return (
    <form className="expense-form" onSubmit={onSubmit} noValidate>
      <div className="form-heading">
        <h2>{isEditing ? 'Edit expense' : 'Add an expense'}</h2>
        <p>{isEditing ? 'Update the details below.' : 'Capture a new purchase quickly.'}</p>
      </div>

      <label className="field" htmlFor="description">
        <span>Description</span>
        <input
          id="description"
          type="text"
          name="description"
          value={formData.description}
          placeholder="What did you spend on?"
          onChange={onChange}
          aria-invalid={Boolean(errors.description)}
          aria-describedby={errors.description ? 'description-error' : undefined}
        />
        {errors.description ? (
          <p className="field-error" id="description-error" role="alert">
            {errors.description}
          </p>
        ) : null}
      </label>

      <label className="field" htmlFor="amount">
        <span>Amount</span>
        <input
          id="amount"
          type="number"
          name="amount"
          min="0"
          step="0.01"
          value={formData.amount}
          placeholder="0.00"
          onChange={onChange}
          aria-invalid={Boolean(errors.amount)}
          aria-describedby={errors.amount ? 'amount-error' : undefined}
        />
        {errors.amount ? (
          <p className="field-error" id="amount-error" role="alert">
            {errors.amount}
          </p>
        ) : null}
      </label>

      <label className="field" htmlFor="category">
        <span>Category</span>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={onChange}
          aria-invalid={Boolean(errors.category)}
          aria-describedby={errors.category ? 'category-error' : undefined}
        >
          <option value="">Choose a category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Other">Other</option>
        </select>
        {errors.category ? (
          <p className="field-error" id="category-error" role="alert">
            {errors.category}
          </p>
        ) : null}
      </label>

      <label className="field" htmlFor="date">
        <span>Date</span>
        <input
          id="date"
          type="date"
          name="date"
          value={formData.date}
          onChange={onChange}
          max={new Date().toISOString().split('T')[0]}
          aria-invalid={Boolean(errors.date)}
          aria-describedby={errors.date ? 'date-error' : undefined}
        />
        {errors.date ? (
          <p className="field-error" id="date-error" role="alert">
            {errors.date}
          </p>
        ) : null}
      </label>

      <div className="form-actions">
        <button type="submit">{isEditing ? 'Save changes' : 'Add expense'}</button>
        {isEditing ? (
          <button type="button" className="secondary-btn" onClick={onCancel}>
            Cancel
          </button>
        ) : null}
      </div>
    </form>
  )
}

export default ExpenseForm
