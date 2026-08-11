/* global process */

// existing imports/code

import { GoogleGenAI } from "@google/genai"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    })
  }

  try {
    const { expenses } = req.body

    if (!Array.isArray(expenses) || expenses.length === 0) {
      return res.status(400).json({
        error: "No expenses were provided.",
      })
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: "Gemini API key is not configured.",
      })
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    })

    const expenseData = expenses.map((expense) => ({
      description: expense.description,
      amount: Number(expense.amount),
      category: expense.category,
      date: expense.date,
    }))

    const prompt = `
You are an AI personal finance assistant.

Analyze the following expense data:

${JSON.stringify(expenseData, null, 2)}

Provide a concise and useful spending analysis.

Include:

1. The main spending pattern.
2. The category where the user spends the most.
3. One observation about their spending habits.
4. Two practical suggestions to improve their spending.
5. One short savings recommendation.

Do not invent expenses or financial information.
Base every observation only on the provided expense data.

Keep the response under 180 words.
`

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    })

    const analysis = response.text

    if (!analysis) {
      return res.status(500).json({
        error: "Gemini returned an empty response.",
      })
    }

    return res.status(200).json({
      analysis,
    })
  } catch (error) {
    console.error("Gemini API error:", error)

    return res.status(500).json({
      error:
        error?.message || "Unable to generate AI analysis.",
    })
  }
}

