function ExportCSV({ expenses }) {
  const exportToCSV = () => {
    if (expenses.length === 0) {
      alert("No expenses to export.")
      return
    }

    const headers = ["Description", "Amount", "Category", "Date"]

    const rows = expenses.map((expense) => [
      expense.description,
      expense.amount,
      expense.category,
      expense.date,
    ])

    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n")

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    })

    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = "expenses.csv"

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    URL.revokeObjectURL(url)
  }

  return (
    <button className="export-btn" onClick={exportToCSV}>
       Export CSV
    </button>
  )
}

export default ExportCSV