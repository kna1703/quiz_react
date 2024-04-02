import "./question";
import { useState } from "react";
import "./App.css";
import { quiz } from "./question";
import Header from "./components/Header"

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <p>{console.log(quiz)}</p>
    </>
  );
}

export default App;
