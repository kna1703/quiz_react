import { quiz } from "../../question";
import PropTypes from "prop-types";
import "./ButtonAnswer.css";

function ButtonAnswer({
  index,
  isCorrect,
  setCorrect,
  elementVisible,
  setElementVisible,
  buttonsDisabled,
  setButtonsDisabled,
  setScore,
  score,
}) {
  const questionData = quiz[index];

  const handleChoice = (e) => {
    if (questionData.correctAnswer === e.target.value) {
      setCorrect(true);
      e.target.classList.add("green");
      setScore(score + 1);
    } else {
      setCorrect(false);
      e.target.classList.add("red");
    }
    setElementVisible(true);
    setButtonsDisabled(true);
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
  isCorrect: PropTypes.bool.isRequired,
  setCorrect: PropTypes.func.isRequired,
  elementVisible: PropTypes.bool.isRequired,
  setElementVisible: PropTypes.func.isRequired,
  buttonsDisabled: PropTypes.bool.isRequired,
  setButtonsDisabled: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};
export default ButtonAnswer;
