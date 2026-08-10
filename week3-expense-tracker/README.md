# Expense Tracker

**Expense Tracker** is a modern and responsive web application designed to make personal expense management simple and organized. Built with **React and Vite**, it allows users to record, edit, delete, search, filter, sort, and export their expenses while keeping track of monthly income and budget usage.

The dashboard provides useful financial insights through expense summaries, category breakdowns, budget progress, and spending analytics. It also includes an **AI-powered spending analysis feature using the Google Gemini API**, which provides personalized observations and practical suggestions based on the user's recorded expenses.

The application is designed with a clean interface, responsive layout, dark/light mode support, local data storage, form validation, and an easy-to-use dashboard experience.

## Features

* Add new expenses
* Edit existing expenses
* Delete expenses with confirmation
* Categorize expenses
* Set monthly income
* Track total expenses
* Calculate remaining balance
* Monitor total expense entries
* Search expenses by description
* Filter expenses by category
* Sort expenses by date and amount
* View dashboard analytics
* View expense breakdown by category
* Monitor monthly budget usage
* Smart spending insights
* AI-powered spending analysis using Gemini
* Export expenses to CSV
* Dark mode and light mode
* Form validation
* Responsive user interface
* Local data persistence using browser `localStorage`

## Dashboard

The dashboard provides a quick overview of the user's financial activity.

It displays:

* Monthly Income
* Total Expenses
* Remaining Balance
* Total Entries
* Budget Usage
* Top Spending Category
* Highest Expense
* Average Expense
* Latest Expense
* Expense Breakdown

## AI Spending Analysis

The application includes an AI-powered spending analysis feature using the **Google Gemini API**.

After adding expenses, users can click **Analyze My Spending** to receive personalized observations and practical recommendations based on their expense data.

The AI analysis provides:

1. The main spending pattern
2. The category with the highest spending
3. An observation about spending habits
4. Two practical suggestions for improving spending
5. A short savings recommendation

The AI is instructed to base its analysis only on the expense information provided by the user and not invent financial information.

## Expense Management

Users can easily manage their expenses through the application.

Each expense contains:

* Description
* Amount
* Category
* Date

Users can:

* Add expenses
* Edit expenses
* Delete expenses
* Search expenses
* Filter expenses
* Sort expenses
* Export expense records as CSV

## Budget Management

Users can enter their monthly income and monitor their spending against their available budget.

The application calculates:

* Total monthly expenses
* Remaining balance
* Percentage of budget used
* Budget status messages

The dashboard provides visual feedback to help users understand whether they are within their budget.

## Smart Spending Insights

The application automatically generates spending insights from the recorded expense data.

Examples include:

* Highest spending category
* Percentage of expenses spent in a category
* Available monthly balance
* Budget warnings
* Suggestions for reducing spending

These insights are displayed directly on the dashboard.

## Search, Filter and Sort

### Search

Users can search expenses by their description.

### Filter

Expenses can be filtered by category:

* All
* Food
* Transport
* Shopping
* Bills
* Other

### Sort

Expenses can be sorted by:

* Newest First
* Oldest First
* Highest Amount
* Lowest Amount

## Expense Analytics

The dashboard includes analytics components that provide a visual summary of spending activity.

Analytics include:

* Total entries
* Top spending category
* Highest expense
* Average expense
* Latest expense
* Expense breakdown by category

## Form Validation

The application validates expense information before saving it.

Validation includes:

* Description must contain at least 3 characters
* Amount is required
* Amount must be greater than 0
* Amount cannot exceed 1,000,000
* Category is required
* Date is required
* Future dates are not allowed

## Data Persistence

Expense records and monthly income are stored in the browser using `localStorage`.

This allows the user's data to remain available after refreshing the page or restarting the development server.

The application also stores the user's dark/light mode preference.

## Mode

The application supports both:

* Light Mode
* Dark Mode

The interface is designed to maintain readable text, visible cards, buttons, inputs, charts, and expense information in both themes.

## Technologies Used

### Frontend

* React
* Vite
* JavaScript
* HTML
* CSS

### AI Integration

* Google Gemini API
* `@google/genai`

### Development Tools

* Visual Studio Code
* Git
* GitHub
* Vercel

### Data Storage

* Browser `localStorage`

### Testing

* Vitest
* React Testing Library

## Project Structure

```text
week3-expense-tracker/
│
├── api/
│   └── analyze-expenses.js
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── AIAnalysis.jsx
│   │   ├── AnalyticsCards.jsx
│   │   ├── BudgetProgress.jsx
│   │   ├── ExpenseChart.jsx
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseItem.jsx
│   │   ├── ExpenseList.jsx
│   │   ├── ExportCSV.jsx
│   │   ├── FilterBar.jsx
│   │   ├── Footer.jsx
│   │   ├── IncomeInput.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SmartInsights.jsx
│   │   ├── SortBar.jsx
│   │   └── SummaryCard.jsx
│   │
│   ├── tests/
│   │   ├── AnalyticsCards.test.jsx
│   │   ├── BudgetProgress.test.jsx
│   │   ├── ExpenseForm.test.jsx
│   │   ├── ExpenseList.test.jsx
│   │   ├── FilterBar.test.jsx
│   │   ├── IncomeInput.test.jsx
│   │   ├── SearchBar.test.jsx
│   │   ├── SmartInsights.test.jsx
│   │   └── SummaryCard.test.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── setupTests.js
│
├── .gitignore
├── AI_PROMPTS.md
├── AI_REPORT.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/nirma-waleed/frontend-ai-capstone.git
```

### 2. Navigate to the Expense Tracker project

```bash
cd frontend-ai-capstone/week3-expense-tracker
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

The exact port may be different if another application is already using the default port.

## Environment Variables

The AI Spending Analysis feature requires a Gemini API key.

Create a `.env.local` file inside the `week3-expense-tracker` folder:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Replace `your_gemini_api_key_here` with your own Gemini API key.

### Security

Never commit your real API key to GitHub.

The `.env.local` file should remain ignored by Git.

Do not place the Gemini API key directly inside frontend React components.

## Running the AI Feature Locally

Because the AI endpoint is located in the Vercel `api` directory, the application can be run locally using:

```bash
npx vercel dev
```

Vercel will start the development environment and provide a local URL.

The AI backend endpoint is:

```text
/api/analyze-expenses
```

The frontend sends the expense information to this endpoint, and the backend communicates with the Gemini API.

## How to Use

### 1. Enter Monthly Income

Enter your monthly income in the Monthly Income section.

### 2. Add an Expense

Enter:

* Description
* Amount
* Category
* Date

Then click **Add Expense**.

### 3. Manage Expenses

After adding an expense, you can:

* Edit it
* Delete it
* Search for it
* Filter it
* Sort it

### 4. Monitor Your Dashboard

The dashboard automatically updates the financial statistics after expenses are added or removed.

### 5. Review Spending Insights

The Smart Spending Insights section provides automatic observations about your spending.

### 6. Use AI Spending Analysis

After adding expenses, click:

**Analyze My Spending**

The application sends the expense data to the backend AI endpoint and displays the generated Gemini analysis.

### 7. Export Expenses

Use the CSV export functionality to download your expense records.

### 8. Change Theme

Use the theme toggle to switch between Light Mode and Dark Mode.

## Testing

The project includes component tests using **Vitest** and **React Testing Library**.

Test coverage includes:

* AnalyticsCards
* BudgetProgress
* ExpenseForm
* ExpenseList
* FilterBar
* IncomeInput
* SearchBar
* SmartInsights
* SummaryCard

Run the tests using:

```bash
npm test
```

## Deployment

The project is deployed using **Vercel**.

The application uses Vercel serverless functions for the AI spending analysis feature.

### Live Application

**Expense Tracker:** https://frontend-ai-capstone-2eym.vercel.app/

## Conclusion

Expense Tracker is a practical expense management application that combines everyday expense tracking with budgeting, analytics, data export, and AI-powered spending insights. It provides users with a simple way to record their expenses, monitor their financial activity, understand their spending patterns, and receive useful recommendations.

From a development perspective, the project demonstrates practical use of **React, Vite, JavaScript, CSS, localStorage, Vercel serverless functions, and the Google Gemini API**. It also focuses on responsive design, reusable components, form validation, testing, and a clear user experience.

Overall, Expense Tracker demonstrates how modern web technologies and AI can be combined to create a useful and user-friendly personal finance application.
