# AI-Assisted Workflow Comparison

## Overview
For this assignment, I implemented the same React Settings Form twice using two different prompting approaches. The goal was to compare the effectiveness of a vague prompt versus a detailed prompt and evaluate how prompt quality affects development speed, correctness, and code quality.

## Round One – Vague Prompt
The first implementation used a short, simple prompt with minimal instructions. The AI generated a functional settings form with basic inputs and styling. However, several improvements were required during manual review. Validation was limited, accessibility features were incomplete, there were no automated tests, and the UI was relatively basic. Although the initial implementation was quick, additional time was spent reviewing and improving the generated code.

## Round Two – Detailed Prompt
The second implementation used a structured prompt following an Explore → Plan → Implement → Verify workflow. It included file references, validation requirements, accessibility expectations, styling constraints, testing requirements, and verification steps. The generated code was significantly more complete and required much less manual correction. The project included controlled components, inline validation, accessibility improvements, automated tests using Vitest and React Testing Library, responsive styling, and successful verification through build, lint, and test commands.

## Comparison
The detailed prompt produced higher-quality code with better validation, accessibility, maintainability, and testing. Although writing the prompt took more time, the overall development process was faster because fewer issues needed to be corrected manually. The vague prompt required more review effort and left more edge cases uncovered.

## AI Mistake Caught
One issue I noticed during review was that the visual difference between the first and second implementations was small. I improved the styling while keeping the existing functionality unchanged. I also verified that all tests passed successfully before finalizing the project.

## Conclusion
This exercise demonstrated that detailed prompts combined with planning and verification produce more reliable software than simple one-sentence prompts. A structured AI workflow improves both code quality and development efficiency.

## Edge Cases and Review Effort
During review, I checked several edge cases such as empty display names, invalid email addresses, cancelling unsaved changes, and ensuring the Save button remained disabled when no valid changes existed. The vague prompt required significantly more manual review because validation, accessibility, and testing were incomplete. The detailed prompt took longer to write but reduced debugging and review effort, resulting in a more reliable implementation.

