import FilterBar from './components/FilterBar'
import { useEffect, useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import SummaryCard from './components/SummaryCard'
import SearchBar from './components/SearchBar'

const STORAGE_KEY = 'expense-tracker-data'

const starterExpenses = [
  { id: 1, description: 'Groceries', amount: '42.50', category: 'Food', date: '2026-07-20' },
  { id: 2, description: 'Train ticket', amount: '8.25', category: 'Transport', date: '2026-07-21' },
]

const initialFormState = {
  description: '',
  amount: '',
  category: '',
  date: '',
}

function getInitialExpenses() {
  if (typeof window === 'undefined') {
    return starterExpenses
  }

  try {
    const storedExpenses = window.localStorage.getItem(STORAGE_KEY)

    if (!storedExpenses) {
      return starterExpenses
    }

    const parsedExpenses = JSON.parse(storedExpenses)

    return Array.isArray(parsedExpenses) && parsedExpenses.length > 0
      ? parsedExpenses
      : starterExpenses
  } catch {
    return starterExpenses
  }
}

function App() {
  const [expenses, setExpenses] = useState(getInitialExpenses)
  const [formData, setFormData] = useState({ ...initialFormState })
  const [errors, setErrors] = useState({})
  const [editingId, setEditingId] = useState(null)

  // NEW
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses))
  }, [expenses])

  // NEW
  const filteredExpenses = expenses.filter((expense) => {
  const matchesSearch = expense.description
    .toLowerCase()
    .includes(searchTerm.toLowerCase())

  const matchesCategory =
    selectedCategory === 'All' ||
    expense.category === selectedCategory

  return matchesSearch && matchesCategory
})

  const validateForm = (values) => {
    const nextErrors = {}

    if (!values.description.trim()) {
      nextErrors.description = 'Description is required.'
    }

    if (!values.amount) {
      nextErrors.amount = 'Amount is required.'
    } else {
      const amountValue = Number(values.amount)

      if (Number.isNaN(amountValue) || amountValue <= 0) {
        nextErrors.amount = 'Amount must be a positive number.'
      }
    }

    if (!values.category) {
      nextErrors.category = 'Category is required.'
    }

    if (!values.date) {
      nextErrors.date = 'Date is required.'
    }

    return nextErrors
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    setErrors((previous) => {
      if (!previous[name]) {
        return previous
      }

      const nextErrors = { ...previous }
      delete nextErrors[name]
      return nextErrors
    })
  }

  const resetForm = () => {
    setFormData({ ...initialFormState })
    setErrors({})
    setEditingId(null)
  }

  const buildExpense = (id) => ({
    id,
    description: formData.description.trim(),
    amount: formData.amount,
    category: formData.category,
    date: formData.date,
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors = validateForm(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const nextExpense = buildExpense(editingId ?? Date.now())

    if (editingId) {
      setExpenses((previous) =>
        previous.map((expense) =>
          expense.id === editingId
            ? { ...expense, ...nextExpense }
            : expense
        )
      )
    } else {
      setExpenses((previous) => [nextExpense, ...previous])
    }

    resetForm()
  }

  const handleEditExpense = (expense) => {
    setEditingId(expense.id)

    setFormData({
      description: expense.description,
      amount: expense.amount,
      category: expense.category,
      date: expense.date,
    })

    setErrors({})
  }

  const handleDeleteExpense = (id) => {
    setExpenses((previous) =>
      previous.filter((expense) => expense.id !== id)
    )

    if (editingId === id) {
      resetForm()
    }
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Expense Tracker</p>
          <h1>Track your spending in one place</h1>
        </div>
      </header>

      <section
        className="dashboard"
        aria-label="Expense dashboard"
      >
        <div className="dashboard-main">
          <SummaryCard expenses={expenses} />

          <ExpenseForm
            formData={formData}
            errors={errors}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
            isEditing={Boolean(editingId)}
            onCancel={resetForm}
          />
        </div>
<SearchBar
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
/>

<FilterBar
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
/>

<ExpenseList
  expenses={filteredExpenses}
  onDelete={handleDeleteExpense}
  onEdit={handleEditExpense}
/>
    
      </section>
    </main>
  )
}

export default App