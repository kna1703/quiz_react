import "./question";
import { useState } from "react";
import "./App.css";
import { quiz } from "./question";
import Question from "./components/question/question/question";


function App() {
  // const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);

  return (
    <>
    <Question index={index} setIndex={setIndex}/>
    </>
  );
}

export default App;
