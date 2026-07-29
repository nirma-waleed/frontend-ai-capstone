import "./App.css";
import Disclosure from "./playground/Disclosure";
import Tabs from "./playground/Tabs";
import Modal from "./playground/Modal";

function App() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Accessible Component Playground</h1>

      <Disclosure />

      <hr style={{ margin: "40px 0" }} />

      <Tabs />

      <hr style={{ margin: "40px 0" }} />

      <Modal />
    </main>
  );
}

export default App;