# AI Development Report

## Project Overview

For this assignment, I developed an Expense Tracker application using React and Vite. I used AI as a development assistant while following the Explore → Plan → Implement → Verify workflow. After each AI response, I reviewed the generated output before proceeding to the next phase.


## Explore Phase

During the Explore phase, the AI analysed the project requirements before generating any code.

The AI identified:
- The React components required for the application.
- The files that needed to be created or modified.
- The React state required.
- The overall application structure.
- The validation strategy.
- The localStorage approach.

### Manual Review

I reviewed the AI's analysis and confirmed that it matched the assignment requirements before approving the next phase.



## Plan Phase

During the Plan phase, the AI created a detailed implementation plan.

The plan included:
- The folder structure.
- React component architecture.
- Development order.
- State management.
- Validation strategy.
- localStorage integration.
- Responsive layout.
- Accessibility considerations.

### Manual Review

While reviewing the AI-generated plan, I noticed that it suggested an incorrect folder path (`week3-expense-tracker/src/components`). Since I was already working inside the `week3-expense-tracker` project, I corrected the component location to `src/components` before implementation.


## Implement Phase

During the implementation phase, the AI generated the first version of the Expense Tracker application.

The AI:
- Created the `ExpenseForm` component.
- Created the `ExpenseList` component.
- Created the `ExpenseItem` component.
- Created the `SummaryCard` component.
- Updated `App.jsx`.
- Updated `App.css`.
- Generated a responsive user interface.
- Verified the application by running a successful production build (`npm run build`).

### Manual Review

After reviewing the generated code, I confirmed that:
- The components were created in the correct project folder.
- The application structure matched the implementation plan.
- The project built successfully without errors.
- The generated code was accepted for the next development phase.

## Functionality Enhancement Phase

During this phase, the AI enhanced the Expense Tracker with additional functionality.

The AI:
- Added form validation for all required fields.
- Displayed inline validation messages.
- Implemented add, edit, and delete expense functionality.
- Cleared the form after successful submission.
- Integrated localStorage using the key `expense-tracker-data`.
- Improved keyboard accessibility and form labels.
- Verified the application by running a successful production build.

### Manual Review

After reviewing the generated code, I:
- Tested the validation rules.
- Verified that add, edit, and delete operations worked correctly.
- Confirmed that data persisted after refreshing the page using localStorage.
- Confirmed that the application built successfully without errors.

## Verify and Final Refactoring Phase

During the final phase, the AI reviewed the completed Expense Tracker application and focused on improving the overall code quality and user interface without changing the existing functionality.

The AI:
- Improved code readability.
- Refactored duplicated code.
- Enhanced accessibility.
- Improved the overall UI design by refining colours, spacing, typography, and layout.
- Verified that all React components were correctly connected.
- Confirmed that validation, add, edit, delete, and localStorage features continued to work correctly.
- Successfully verified the project by running a production build.

### Manual Review

After reviewing the AI-generated changes, I:

- Tested the application manually.
- Verified that validation worked correctly.
- Confirmed that add, edit, and delete functionality worked as expected.
- Verified that data persisted after refreshing the page using localStorage.
- Reviewed the updated UI and confirmed that the layout remained responsive.
- Confirmed that the project built successfully using `npm run build`.

### Additional Manual Improvement

After reviewing the final application, I manually adjusted the background colour to improve the overall appearance while keeping the functionality unchanged.


## AI Assistance

AI assisted me throughout the project by:
- Analysing the project requirements.
- Planning the application architecture.
- Generating React components.
- Organising the project structure.
- Producing a responsive user interface.
- Implementing form validation.
- Adding edit and delete functionality.
- Integrating localStorage persistence.
- Improving accessibility and code readability.
- Verifying the application using a successful production build (`npm run build`).



## Manual Improvements

Throughout development, I manually:
- Reviewed each AI-generated response before implementation.
- Corrected the folder structure suggested by the AI.
- Verified that files were created in the correct locations.
- Tested the add, edit, and delete functionality.
- Verified that validation worked correctly.
- Confirmed that expense data persisted using localStorage.
- Checked that the responsive layout worked on different screen sizes.
- Made minor UI improvements, including adjusting the background colour.
- Confirmed that the application built successfully before final submission.



## Final Status

The Expense Tracker application was successfully completed by following the Explore → Plan → Implement → Verify workflow.

The final application includes:
- Add, edit, and delete expense functionality.
- Form validation with inline error messages.
- localStorage persistence.
- Responsive design for different screen sizes.
- Accessible form controls.
- Modular React component structure.
- Successful production build verification using `npm run build`.

The AI accelerated the development process by assisting with analysis, planning, implementation, and verification. Each AI-generated response was manually reviewed before acceptance, and necessary corrections and UI improvements were made to ensure the final project met the assignment requirements.

