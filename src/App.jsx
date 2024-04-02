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
  const [elementVisible, setElementVisible] = useState(false);
  const questionData = quiz[index];
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  return (
    <>
    <Header />
      <Question index={index} setIndex={setIndex} />

      <Result />
      <div>
        {/* <p>{questionData.question}</p> */}

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
        buttonsDisabled={buttonsDisabled}
        setButtonsDisabled={setButtonsDisabled}
      />
      <Result
        isCorrect={isCorrect}
        elementVisible={elementVisible}
        setElementVisible={setElementVisible}
        index={index}
        setIndex={setIndex}
        buttonsDisabled={buttonsDisabled}
        setButtonsDisabled={setButtonsDisabled}
      />

    </>
  );
}

export default App;
