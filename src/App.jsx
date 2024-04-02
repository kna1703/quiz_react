import "./App.css";
import { quiz } from "./question";
import Header from "./components/Header";
import ButtonAnswer from "./components/ButtonAnswer/ButtonAnswer";
import { useState } from "react";
import Result from "./components/Result/Result";

import Question from "./components/question/question/question";

function App() {
  const [index, setIndex] = useState(0);
  const [isCorrect, setCorrect] = useState(false);

  const questionData = quiz[index];

  const handleNext = () => {
    setIndex((index) => index + 1);
  };

  const handleBefore = () => {
    setIndex((index) => index - 1);
  };

  return (
    <>
      <Question index={index} setIndex={setIndex} />

      <Result />
      <div>
        <p>{questionData.question}</p>
        <button onClick={handleBefore} disabled={index === 0}>
          Before
        </button>
        <button onClick={handleNext} disabled={index === quiz.length - 1}>
          Next
        </button>

        {/* <button>{questionData.choices[0]}</button>
        <button>{questionData.choices[1]}</button>
        <button>{questionData.choices[2]}</button>
        <button>{questionData.choices[3]}</button> */}
      </div>
      <ButtonAnswer
        index={index}
        setIndex={setIndex}
        isCorrect={isCorrect}
        setCorrect={setCorrect}
      />
      <Result />
    </>
  );
}

export default App;
