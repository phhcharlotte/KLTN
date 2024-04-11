import { useState } from "react";

import "./App.css";
import Count from "./components/Count";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>test MR</h1>
      <Count count={count} increment={() => setCount((c) => c + 1)} />
    </>
  );
}

export default App;
