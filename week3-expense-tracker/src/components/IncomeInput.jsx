function IncomeInput({ monthlyIncome, setMonthlyIncome }) {
  return (
    <section className="income-input">
      <label htmlFor="income">
        <strong>Monthly Income</strong>
      </label>

      <input
        id="income"
        type="number"
        min="0"
        value={monthlyIncome}
        onChange={(e) =>
          setMonthlyIncome(Number(e.target.value))
        }
      />
    </section>
  )
}

export default IncomeInput