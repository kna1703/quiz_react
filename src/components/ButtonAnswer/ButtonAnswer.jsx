import { quiz } from "../../question";
import PropTypes from "prop-types";
import "./ButtonAnswer.css";
import { useState } from "react";


function ButtonAnswer({
  index,
  isCorrect,
  setCorrect,
  elementVisible,
  setElementVisible,
  buttonsDisabled,
  setButtonsDisabled,
}) {
  const questionData = quiz[index];
  




  const handleChoice = (e) => {
    //     console.log(indexButton);
    if (questionData.correctAnswer === e.target.value) {
      setCorrect(true);
      e.target.classList.add("green")
      
    } else {
      setCorrect(false);
      e.target.classList.add("red")
  
    }
    setElementVisible(true);
    console.log(elementVisible);
    setButtonsDisabled(true)
  };


  return (
    <>
      <div className="bouton-grid">
        <button
          value={questionData.choices[0]}
          onClick={handleChoice}
          className="btn-answer"
          disabled={buttonsDisabled} 
        >
          {" "}
          {questionData.choices[0]}{" "}
        </button>
        <button
          value={questionData.choices[1]}
          onClick={handleChoice}
          className="btn-answer"
          disabled={buttonsDisabled} 
        >
          {" "}
          {questionData.choices[1]}
        </button>
        <button
          value={questionData.choices[2]}
          onClick={handleChoice}
          className="btn-answer"
          disabled={buttonsDisabled} 
        >
          {" "}
          {questionData.choices[2]}
        </button>
        <button
          value={questionData.choices[3]}
          onClick={handleChoice}
          className="btn-answer"
          disabled={buttonsDisabled} 
        >
          {" "}
          {questionData.choices[3]}
        </button>
      </div>
    </>
  );
}

ButtonAnswer.propTypes = {
  index: PropTypes.number.isRequired,
};

export default ButtonAnswer;

{
  /* {questionData.choices.map((button, indexButton) => (
        <Button
          key={indexButton}
          button={button}
          onClick={() => handleChoice(indexButton)}
          className="btn"
        >
          {button}/
        </Button>
      ))} */
}
