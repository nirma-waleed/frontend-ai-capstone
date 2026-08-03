function SortBar({ sortBy, setSortBy }) {
  return (
    <section className="sort-bar">
      <label htmlFor="sort">
        <strong>Sort Expenses</strong>
      </label>

      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="highest">Highest Amount</option>
        <option value="lowest">Lowest Amount</option>
      </select>
    </section>
  )
}

export default SortBar