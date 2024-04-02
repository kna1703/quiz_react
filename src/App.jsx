import "./question";
import { useState } from "react";
import "./App.css";
import { quiz } from "./question";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Popo</h1>
      <p>{console.log(quiz)};</p>
    </>
  );
}

export default App;
