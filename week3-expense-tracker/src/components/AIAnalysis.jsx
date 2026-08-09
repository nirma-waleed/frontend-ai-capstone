import { useState } from "react"

function AIAnalysis({ expenses }) {
  const [analysis, setAnalysis] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleAnalyze = async () => {
    if (!expenses || expenses.length === 0) {
      setError("Add at least one expense before requesting an AI analysis.")
      return
    }

    setLoading(true)
    setError("")
    setAnalysis("")

    try {
      const response = await fetch("/api/analyze-expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ expenses }),
      })

      // Read response as text first so empty/non-JSON responses
      // don't cause "Unexpected end of JSON input"
      const text = await response.text()

      let data

      try {
        data = JSON.parse(text)
      } catch {
        throw new Error(
          "The AI server returned an invalid response. Please try again."
        )
      }

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to generate AI analysis."
        )
      }

      setAnalysis(data.analysis)
    } catch (error) {
      console.error("AI analysis error:", error)
      setError(error.message || "Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="ai-analysis">
      <span className="ai-analysis-label">AI-Powered</span>

      <h2>AI Spending Analysis</h2>

      <p>
        Get personalized spending observations and practical suggestions
        based on your expenses.
      </p>

      <button
        type="button"
        onClick={handleAnalyze}
        disabled={loading || !expenses || expenses.length === 0}
      >
        {loading ? "Analyzing..." : "Analyze My Spending"}
      </button>

      {error && (
        <p className="ai-analysis-error" role="alert">
          {error}
        </p>
      )}

      {analysis && (
        <div className="ai-analysis-result">
          <h3>Gemini Analysis</h3>
          <p>{analysis}</p>
        </div>
      )}
    </section>
  )
}

export default AIAnalysis