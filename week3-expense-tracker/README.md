# AI Expense Tracker

A production-ready, AI-enhanced expense tracking application built with React and Vite as part of the **FlyRank Frontend AI Engineering Capstone**.

## 🔗 Live Demo

**Production:**
https://frontend-ai-capstone-2eym.vercel.app/

**GitHub Repository:**
https://github.com/nirma-waleed/frontend-ai-capstone/tree/capstone-ai-expense-tracker/week3-expense-tracker



## 🎯 Purpose & Problem

AI Expense Tracker helps individuals track their monthly income and expenses in one place, understand their spending patterns, monitor their remaining budget, and receive AI-generated spending insights. The application is designed for students, professionals, and anyone who wants a simple way to manage everyday expenses. I chose this project because expense management is a practical real-world problem, and adding AI allows the application to provide useful observations and suggestions rather than only storing expense records.



## 🎯 Problem It Solves

Managing daily expenses manually can make it difficult to understand where money is being spent and whether spending is staying within a monthly budget.

The application provides:

* Monthly income tracking
* Expense recording
* Category-based organization
* Search and filtering
* Budget usage monitoring
* Expense summaries
* Spending analytics
* AI-powered spending analysis
* CSV export
* Responsive and accessible interface



## 👥 Target Users

The application is suitable for:

* Students managing monthly allowances
* Professionals tracking personal expenses
* Individuals trying to control discretionary spending
* Users who want simple spending insights without complicated financial software



## ✨ Main Features

### 💰 Expense Management

Users can:

* Add expenses
* Edit existing expenses
* Delete expenses
* Assign categories
* Select expense dates
* Track expense amounts

### 📊 Expense Dashboard

The dashboard displays:

* Monthly income
* Total expenses
* Remaining balance
* Total expense entries
* Budget usage percentage

### 🔎 Search and Filtering

Expenses can be searched by description and filtered by category.

Supported categories include:

* Food
* Transport
* Shopping
* Bills
* Other

### 📈 Spending Analytics

The application provides visual and summarized information about spending patterns and categories.

### 🤖 AI Spending Analysis

The application includes an AI-powered spending analysis feature.

Users can request an analysis of their expense data to receive:

* Spending patterns
* Highest spending categories
* Important observations
* Practical suggestions
* Savings recommendations

The AI feature is designed to provide meaningful analysis of the user's existing expense data rather than functioning as a generic chatbot.

### 📥 CSV Export

Expense records can be exported for further analysis or personal record keeping.

### 🌙 Dark Mode

The interface supports dark mode for improved usability in different environments.

### ♿ Accessibility

Accessibility was considered throughout the interface using semantic HTML, accessible labels, keyboard-friendly controls, meaningful headings, and appropriate ARIA attributes where required.

The application was evaluated using **WAVE** and **Lighthouse**.

---

# 🧠 AI Integration

The AI feature analyzes structured expense information and generates spending observations and practical recommendations.

### How it works

1. The user records expenses in the application.
2. The application collects the relevant expense information.
3. The expense data is sent to the AI analysis endpoint.
4. The AI receives structured spending information.
5. The model analyzes categories, amounts, and spending patterns.
6. The response is displayed as personalized spending insights.

### Why AI is useful

Traditional expense trackers can tell users **how much** they spent.

This application also attempts to explain:

* Where spending is concentrated
* Which categories contribute most to expenses
* What spending patterns may need attention
* What practical steps could reduce unnecessary spending

This makes the AI feature a functional part of the expense-management workflow rather than a standalone chatbot.

---

# 🏗️ Architecture Overview

The application follows a component-based React architecture.

```text
week3-expense-tracker/
│
├── src/
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
│   │   ├── ExpenseItem.test.jsx
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
│   └── main.jsx
│
├── api/
│   └── analyze-expenses.js
│
├── public/
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

### Component Responsibilities

| Component                 | Responsibility                                    |
| ------------------------- | ------------------------------------------------- |
| `App.jsx`                 | Main application state and component coordination |
| `ExpenseForm.jsx`         | Adding and editing expenses                       |
| `ExpenseList.jsx`         | Displaying expense records                        |
| `ExpenseItem.jsx`         | Individual expense item and actions               |
| `SummaryCard.jsx`         | Income, expense, balance and entry summaries      |
| `BudgetProgress.jsx`      | Monthly budget usage                              |
| `AnalyticsCards.jsx`      | Spending analytics                                |
| `ExpenseChart.jsx`        | Visual spending information                       |
| `FilterBar.jsx`           | Category filtering                                |
| `SearchBar.jsx`           | Expense searching                                 |
| `SortBar.jsx`             | Expense sorting                                   |
| `IncomeInput.jsx`         | Monthly income input                              |
| `SmartInsights.jsx`       | Spending observations                             |
| `AIAnalysis.jsx`          | AI-powered expense analysis                       |
| `ExportCSV.jsx`           | CSV expense export                                |
| `Footer.jsx`              | Application footer                                |
| `api/analyze-expenses.js` | AI analysis endpoint                              |

---

# 🛠️ Technology Stack

### Frontend

* React
* Vite
* JavaScript
* HTML
* CSS

### Testing

* Vitest
* React Testing Library
* jsdom
* V8 Coverage

### AI

* Gemini/LLM-based expense analysis
* Server-side API endpoint for AI requests

### Deployment

* Vercel

### Development Tools

* Git
* GitHub
* VS Code
* Vercel CLI



# 🚀 Getting Started

## Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git

## Clone the repository

```bash
git clone https://github.com/nirma-waleed/frontend-ai-capstone
```

Navigate to the project:

```bash
cd frontend-ai-capstone/week3-expense-tracker
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local Vite URL shown in the terminal.



# 🔐 Environment Variables

The AI integration uses environment configuration for the required API credentials.

Create a `.env.local` file in the project root and configure the required AI API key.

Example:

```env
GEMINI_API_KEY=your_api_key_here
```


# 🧪 Testing

The application uses **Vitest** and **React Testing Library**.

Tests cover important components including:

* Analytics Cards
* Budget Progress
* Expense Form
* Expense Item
* Expense List
* Filter Bar
* Income Input
* Search Bar
* Smart Insights
* Summary Card

Run the test suite:

```bash
npm test -- --run
```

Run tests with coverage:

```bash
npx vitest run --coverage
```

The final test run successfully executed **10 test files and 15 tests**.

The project achieved approximately:

* **82% statement coverage**
* **82% function coverage**
* **82% line coverage**
* **53% branch coverage**

Coverage exceeded the assignment requirement of **50% component coverage**.



# ♿ Accessibility

Accessibility was tested using **WAVE** and **Lighthouse**.

The application was improved based on accessibility audit feedback, including:

* Semantic heading structure
* Accessible form labels
* ARIA labelling where appropriate
* Meaningful button names
* Keyboard-friendly controls
* Clear content structure
* Improved accessibility of dashboard sections

### Audit Results

The application achieved a strong accessibility result during Lighthouse testing.

Latest recorded Lighthouse scores:

| Category       | Score |
| -------------- | ----: |
| Performance    |    93 |
| Accessibility  |   100 |
| Best Practices |   100 |
| SEO            |    90 |

The WAVE accessibility evaluation also showed a **9.9/10 AIM score** during testing.

Accessibility testing is still considered an ongoing process, and manual testing remains important in addition to automated tools.



# 📱 Responsive Design

The interface is designed to work across different screen sizes and devices.

The layout adapts the dashboard, forms, expense lists, analytics, and navigation for smaller screens.

Mobile performance and accessibility were specifically considered during the final audit.



# 🛡️ Error Handling & Resilience

The application validates expense input before submitting records.

Validation includes:

* Required description
* Valid expense amount
* Expense category
* Expense date

The budget calculation also handles cases where monthly income is zero to avoid invalid percentage calculations.

For AI analysis, the application is designed to avoid exposing API credentials directly in the frontend and uses an API endpoint to process AI requests.

If the AI service cannot provide a response, the application should fail gracefully rather than preventing the core expense-tracking functionality from working.

# 💾 Data Management

Expense and income information are managed within the application and persisted locally where applicable.

This allows users to continue working with their expense data without requiring a traditional database for the core expense-tracking functionality.

The AI analysis operates on the expense information supplied to the analysis feature.


# 📦 Production Deployment

The application is deployed using Vercel.

### Production URL

https://frontend-ai-capstone-2eym.vercel.app/

The production deployment was tested after deployment to verify that the application loads and core functionality works correctly.

### Deployment command

```bash
npx vercel --prod
```


# 🔄 Deployment Checklist

Before production deployment, the following checks were completed:

* [x] Application builds successfully
* [x] Tests pass
* [x] ESLint passes
* [x] Production deployment completed
* [x] Live URL verified
* [x] Accessibility audit performed
* [x] Lighthouse audit performed
* [x] AI feature tested
* [x] GitHub repository updated
* [x] Coverage reports removed from Git tracking
* [x] Environment files excluded from Git



# ↩️ Rollback Plan

The project is maintained using Git and GitHub.

If a production deployment introduces a serious issue:

1. Identify the last known working commit.
2. Revert or redeploy that commit.
3. Run the test suite.
4. Run the production build.
5. Redeploy the verified version using Vercel.

The project history provides previous commits that can be used to identify stable versions.



# ⚠️ Known Limitations

The current version has some limitations:

* Expense data is primarily intended for personal/local use.
* There is no user authentication system.
* There is no cloud database or multi-device synchronization.
* AI responses depend on the availability and behavior of the configured AI service.
* AI-generated suggestions should be treated as general spending guidance rather than professional financial advice.
* Automated accessibility tools cannot replace complete manual accessibility testing.



# 🔮 Future Improvements

Possible future improvements include:

* User authentication
* Cloud database synchronization
* Monthly and yearly reports
* Custom spending categories
* Advanced financial charts
* AI-powered anomaly detection
* Export to PDF
* Improved mobile experience

---

# 📚 What I Learned

This project helped me move beyond building individual React components toward thinking about a complete production application.

I practiced:

* Component-based React development
* State management
* Form validation
* Accessibility
* Automated testing
* Code coverage
* AI integration
* API handling
* Error handling
* Git and GitHub workflows
* Production deployment
* Performance auditing
* Accessibility auditing

One of the most important lessons was that completing a feature is only part of building a production application. Testing, accessibility, documentation, deployment, and failure handling are equally important.

---

# 📝 Reflection

The most challenging part of the project was bringing multiple concerns together into one working application. Building the expense features was only the beginning; integrating AI, testing components, improving accessibility, checking performance, and deploying the application required additional iteration.

If I were building the project again, I would plan the architecture and testing strategy earlier instead of adding some of these concerns near the end.

The biggest lesson was that a production-ready application is not simply an application that works. It should also be accessible, tested, documented, deployable, and understandable to another developer.

## 🎯 Conclusion

AI Expense Tracker is a complete, deployed expense-management application built to make everyday spending easier to track and understand. It combines practical expense tracking with AI-powered analysis while keeping accessibility, testing, and reliable deployment in focus.

