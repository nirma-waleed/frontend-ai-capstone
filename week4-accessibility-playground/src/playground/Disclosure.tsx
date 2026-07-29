import { useState } from "react";

export default function Disclosure() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <h2>Disclosure Component</h2>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="disclosure-content"
      >
        {isOpen ? "▼" : "▶"} What is React?
      </button>

      {isOpen && (
        <div id="disclosure-content">
          <p>
            React is a JavaScript library for building user interfaces.
          </p>
        </div>
      )}
    </section>
  );
}