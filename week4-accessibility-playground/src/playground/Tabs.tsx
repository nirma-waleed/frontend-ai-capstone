import { useRef, useState } from "react";

const tabs = [
  {
    id: "overview",
    label: "Overview",
    content: "This is the Overview tab.",
  },
  {
    id: "features",
    label: "Features",
    content: "This tab explains the Features.",
  },
  {
    id: "contact",
    label: "Contact",
    content: "This is the Contact information.",
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let newIndex = index;

    if (event.key === "ArrowRight") {
      newIndex = (index + 1) % tabs.length;
    } else if (event.key === "ArrowLeft") {
      newIndex = (index - 1 + tabs.length) % tabs.length;
    } else {
      return;
    }

    event.preventDefault();
    setActiveTab(newIndex);
    tabRefs.current[newIndex]?.focus();
  };

  return (
    <section style={{ marginTop: "40px" }}>
      <h2>Tabs Component</h2>

      <div role="tablist" aria-label="Sample Tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={activeTab === index}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => setActiveTab(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            style={{
              marginRight: "10px",
              padding: "10px 18px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              background: activeTab === index ? "#2563eb" : "#94a3b8",
              color: "white",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${tabs[activeTab].id}`}
        aria-labelledby={`tab-${tabs[activeTab].id}`}
        style={{ marginTop: "20px" }}
      >
        <p>{tabs[activeTab].content}</p>
      </div>
    </section>
  );
}