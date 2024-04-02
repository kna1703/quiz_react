import Result from "./components/Result/Result";
import "./question";
import { useState } from "react";
import "./App.css";
import { quiz } from "./question";
import Question from "./components/question/question/question";
import Header from "./components/Header"

function App() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Question index={index} setIndex={setIndex}/>
      <Result />
      <Header />
    </>
  );
}

export default App;
