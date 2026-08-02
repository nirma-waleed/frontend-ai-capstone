function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">
      <label htmlFor="search">Search Expenses</label>

      <input
        id="search"
        type="text"
        placeholder="Search by description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}

export default SearchBar