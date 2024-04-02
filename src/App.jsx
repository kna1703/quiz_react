import "./App.css";
import { quiz } from "./question";
import ButtonAnswer from "./components/ButtonAnswer/ButtonAnswer";
import { useState } from "react";
import Result from "./components/Result/Result";

function App() {
  const [index, setIndex] = useState(0);
  const [isCorrect, setCorrect] = useState(false);
  const [elementVisible, setElementVisible] = useState(false);
  const questionData = quiz[index];

  return (
    <>
      <div>
        <p>{questionData.question}</p>

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
        elementVisible={elementVisible}
        setElementVisible={setElementVisible}
      />
      <Result
        isCorrect={isCorrect}
        elementVisible={elementVisible}
        setElementVisible={setElementVisible}
        index={index}
        setIndex={setIndex}
      />
    </>
  );
}

export default App;
