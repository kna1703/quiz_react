import Header from "./components/Header";
import ButtonAnswer from "./components/ButtonAnswer/ButtonAnswer";
import { useState } from "react";
import Result from "./components/Result/Result";
import Question from "./components/question/question/question";

function App() {
  const [index, setIndex] = useState(0);
  const [isCorrect, setCorrect] = useState(false);
  const [elementVisible, setElementVisible] = useState(false);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <>
      <Header />
      <Question index={index} setIndex={setIndex} />

      <ButtonAnswer
        index={index}
        setIndex={setIndex}
        isCorrect={isCorrect}
        setCorrect={setCorrect}
        elementVisible={elementVisible}
        setElementVisible={setElementVisible}
        buttonsDisabled={buttonsDisabled}
        setButtonsDisabled={setButtonsDisabled}
        score={score}
        setScore={setScore}
      />
      <Result
        isCorrect={isCorrect}
        elementVisible={elementVisible}
        setElementVisible={setElementVisible}
        index={index}
        setIndex={setIndex}
        buttonsDisabled={buttonsDisabled}
        setButtonsDisabled={setButtonsDisabled}
        score={score}
        setScore={setScore}
      />
    </>
  );
}

export default App;
