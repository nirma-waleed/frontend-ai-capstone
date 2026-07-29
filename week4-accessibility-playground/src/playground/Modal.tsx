import { useEffect, useRef, useState } from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    openButtonRef.current?.focus();
  };

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) {
    return (
      <section style={{ marginTop: "40px" }}>
        <h2>Modal Dialog</h2>

        <button ref={openButtonRef} onClick={openModal}>
          Open Modal
        </button>
      </section>
    );
  }

  return (
    <section style={{ marginTop: "40px" }}>
      <h2>Modal Dialog</h2>

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "2px solid #2563eb",
          borderRadius: "10px",
          background: "#ffffff",
        }}
      >
        <h3 id="modal-title">Accessible Modal</h3>

        <p>
          This modal demonstrates an accessible dialog built with React and
          TypeScript.
        </p>

        <button ref={closeButtonRef} onClick={closeModal}>
          Close
        </button>
      </div>
    </section>
  );
}