import Footer from "./components/Footer"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ExportCSV from "./components/ExportCSV"
import SortBar from './components/SortBar'
import SmartInsights from './components/SmartInsights'
import AnalyticsCards from './components/AnalyticsCards'
import BudgetProgress from './components/BudgetProgress'
import ExpenseChart from './components/ExpenseChart'
import IncomeInput from './components/IncomeInput'
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
  const [sortBy, setSortBy] = useState('newest')
const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem('dark-mode') === 'true'
})
const [monthlyIncome, setMonthlyIncome] = useState(() => {
  if (typeof window === 'undefined') return 5000

  const savedIncome = localStorage.getItem('monthly-income')
  return savedIncome ? Number(savedIncome) : 5000

})
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses))
  }, [expenses])
  useEffect(() => {
  localStorage.setItem('monthly-income', monthlyIncome)
}, [monthlyIncome])
useEffect(() => {
  localStorage.setItem('dark-mode', darkMode)
}, [darkMode])
  // NEW
  const filteredExpenses = expenses
  .filter((expense) => {
    const matchesSearch = expense.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    const matchesCategory =
      selectedCategory === 'All' ||
      expense.category === selectedCategory

    return matchesSearch && matchesCategory
  })
  .sort((a, b) => {
    if (sortBy === 'highest') {
      return Number(b.amount) - Number(a.amount)
    }

    if (sortBy === 'lowest') {
      return Number(a.amount) - Number(b.amount)
    }

    if (sortBy === 'oldest') {
      return new Date(a.date) - new Date(b.date)
    }

    return new Date(b.date) - new Date(a.date)
  })

const totalExpenses = expenses.reduce(
  (sum, expense) => sum + Number(expense.amount),
  0
)

const balance = monthlyIncome - totalExpenses

const totalEntries = expenses.length
  const validateForm = (values) => {
    const nextErrors = {}

    if (values.description.trim().length < 3) {
      nextErrors.description = ' Description must contain at least 3 characters.'
    }

    if (!values.amount) {
      nextErrors.amount = 'Amount is required.'
    } else {
      const amountValue = Number(values.amount)

      if ( Number.isNaN(amountValue) ||amountValue <= 0 || amountValue > 1000000) {
        nextErrors.amount ='Amount must be between 1 and 1,000,000.'
      }
    }

    if (!values.category) {
      nextErrors.category = 'Category is required.'
    }

  if (!values.date) {
  nextErrors.date = 'Date is required.'
} else if (new Date(values.date) > new Date()) {
  nextErrors.date = 'Please choose a valid past or current date.'
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

  toast.success("Expense updated successfully!")
} else {
  setExpenses((previous) => [nextExpense, ...previous])

  toast.success("Expense added successfully!")
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
toast.error("Expense deleted.")
    if (editingId === id) {
      resetForm()
    }
  }
  return (
    <main className={darkMode ? "app-shell dark" : "app-shell"}>
      <header className="app-header">

        <div>
          <p className="eyebrow">Expense Tracker</p>
          <h1>Track your spending in one place</h1>
        </div>
        <button
  className="theme-toggle"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? " Light Mode" : " Dark Mode"}
</button>
      </header>
<IncomeInput
  monthlyIncome={monthlyIncome}
  setMonthlyIncome={setMonthlyIncome}
/>
      <section
        className="dashboard"
        aria-label="Expense dashboard"
      >
        <div className="dashboard-main">
          <>
  <SummaryCard
    monthlyIncome={monthlyIncome}
    totalExpenses={totalExpenses}
    balance={balance}
    totalEntries={totalEntries}
  />

  <BudgetProgress
    monthlyIncome={monthlyIncome}
    totalExpenses={totalExpenses}
  />
  <AnalyticsCards
  expenses={expenses}
/>

</>
  <ExpenseChart expenses={expenses} />

<SmartInsights
  expenses={expenses}
  monthlyIncome={monthlyIncome}
  totalExpenses={totalExpenses}
  balance={balance}
/>
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
<SortBar
  sortBy={sortBy}
  setSortBy={setSortBy}
/>
<ExportCSV expenses={filteredExpenses} />

<ExpenseList
  expenses={filteredExpenses}
  onDelete={handleDeleteExpense}
  onEdit={handleEditExpense}
/>
    
      </section>
   <ToastContainer
  position="top-center"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnHover
  theme="colored"
/>  
 <Footer/>
    </main>
  )
}

export default App