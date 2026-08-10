function IncomeInput({ monthlyIncome, setMonthlyIncome }) {
  return (
    <section className="income-input">
      <label htmlFor="income">Monthly Income</label>

      <input
        id="income"
        type="number"
        min="0"
        value={monthlyIncome === 0 ? '' : monthlyIncome}
        placeholder="Enter your monthly income"
        onChange={(e) =>
          setMonthlyIncome(
            e.target.value === '' ? 0 : Number(e.target.value)
          )
        }
      />
    </section>
  )
}

export default IncomeInput