function FilterBar({ selectedCategory, setSelectedCategory }) {
  return (
    <section className="filter-bar">
      <label htmlFor="category-filter">Filter by Category</label>

      <select
        id="category-filter"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Other">Other</option>
      </select>
    </section>
  )
}

export default FilterBar