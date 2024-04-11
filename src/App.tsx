import { useState } from "react";

import "./App.css";
import Count from "./components/Count";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Count count={count} increment={() => setCount((c) => c + 1)} />
    </>
  );
}

export default App;
